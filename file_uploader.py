import joblib
from flask import *
import pickle
import librosa
import numpy as np
import bcrypt
import os
from sklearn.preprocessing import MinMaxScaler
from os import path
from pydub import AudioSegment
from flask import Flask, render_template, request, redirect, url_for, session, send_from_directory , jsonify
from flask_pymongo import PyMongo
import re
import json
from gridfs import GridFS
from pymongo import MongoClient
import sys
import logging 
from werkzeug.utils import secure_filename
from random import sample
from flask_pymongo import PyMongo
root = logging.getLogger()
root.setLevel(logging.DEBUG)

ch = logging.StreamHandler(sys.stdout)
ch.setLevel(logging.DEBUG)
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
root.addHandler(ch)
#print(os.listdir('F:\MIP-github\MUSIC_GENRE_RECOMENDATION_FLASK'))

app = Flask(__name__,template_folder='template')

model = pickle.load(open('model_svm.pkl','rb'))
scaler = pickle.load(open('scaler.pkl','rb'))
#model = joblib.load('model_4.mdl')

app.config['MONGO_DBNAME'] = 'mip'
app.config['MONGO_URI'] = 'mongodb+srv://amogh:amogh@cluster0.divgo.mongodb.net/db?retryWrites=true&w=majority'
mongo = PyMongo(app)
mongo_client = MongoClient('mongodb+srv://amogh:amogh@cluster0.divgo.mongodb.net/db?retryWrites=true&w=majority')
db = mongo_client['mip']
grid_fs = GridFS(db)

songs = []

@app.route('/chart')
def chart(): 
    return render_template('chart.html')


#home route
@app.route('/')
def index():
    if 'name' in session:
        message = session['name']
        return render_template('test.html',message=message) 
    return render_template('signin.html')

@app.route('/admin')
def admin(): 
    users = mongo.db.users
    print(users.count_documents({}))
    s=db.fs.files.find({})
    c=db.fs.files
    print(db.fs.files.count_documents({}))
    c=db.fs.files.distinct('filename')
    count=len(c)
    print(len(c))
    agg_result= db.fs.files.aggregate(
    [{
    "$group" : 
        {"_id" : "$genre", 
         "num" : {"$sum" : 1}
         }}
    ])
    list1=[]
    dict1={}
    for i in agg_result:
       print(i)
       dict1[i["_id"]]=i["num"]
       list1.append(i["num"])
       print(i["num"])
    print(dict1)
    return render_template('admin2.html',users=users,count=count,s=s,c=c,agg_result=agg_result,list1=json.dumps(list1),dict1=dict1)


#audio route
@app.route('/song/<path:path>')
def play2(path):
    return send_from_directory('.', path)

#signup route
@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name' : request.form['name']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'name' : request.form['name'], 'password' : (hashpass)})
            session['name'] = request.form['name']
            #return redirect(url_for('test'))
            return render_template('signin.html')

        
        return 'That username already exists!'

    return render_template('index.html')


#login route
@app.route('/login', methods=['POST'])
def login():
    error=None
    users = mongo.db.users
    login_user = users.find_one({'name' : request.form['name']})
    #hashed=login_user['password'].decode('utf-8')
    hashed=login_user['password']
    if login_user:
        if bcrypt.checkpw(request.form['password'].encode('utf-8'), hashed):
            session['name'] = request.form['name']
            return redirect(url_for('index'))
        
    error='Invalid username/password combination'
    return render_template('signin.html',error=error)  

#logout
@app.route('/logout')
def logout():
    session.pop('name',None)
    return redirect(url_for('index'))

#home routes - for testing
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/home1')
def test():
    if 'name' in session:
        text='Logged in'
        return render_template('test.html',text=text)
    return render_template('test.html')

def get_songs():
    local_songs = []
    for f in os.listdir('F:/MIP-github/MUSIC_GENRE_RECOMENDATION_FLASK'):
        if(f.endswith(".wav")):
            local_songs.append(f)
        else:
            continue
    return local_songs

#fetch metadata from input song
def getmetadata(filename):
    y, sr = librosa.load(filename)
    onset_env = librosa.onset.onset_strength(y, sr)
    tempo = librosa.beat.tempo(onset_envelope=onset_env, sr=sr)

    y_harmonic, y_percussive = librosa.effects.hpss(y)
    tempo, beat_frames = librosa.beat.beat_track(y=y_percussive,sr=sr)

    #chroma_stf

    chroma_stft = librosa.feature.chroma_stft(y=y, sr=sr)

    #rmse

    rmse = librosa.feature.rms(y=y)

    #fetching spectral centroid

    spec_centroid = librosa.feature.spectral_centroid(y, sr=sr)[0]

    #spectral bandwidth

    spec_bw = librosa.feature.spectral_bandwidth(y=y, sr=sr)

    #fetching spectral rolloff

    spec_rolloff = librosa.feature.spectral_rolloff(y+0.01, sr=sr)[0]

    #zero crossing rate

    zero_crossing = librosa.feature.zero_crossing_rate(y)

    #mfcc

    mfcc = librosa.feature.mfcc(y=y, sr=sr)

    #metadata dictionary

    metadata_dict = {'tempo':tempo,'chroma_stft':np.mean(chroma_stft),'rmse':np.mean(rmse),
                     'spectral_centroid':np.mean(spec_centroid),'spectral_bandwidth':np.mean(spec_bw),
                     'rolloff':np.mean(spec_rolloff), 'zero_crossing_rates':np.mean(zero_crossing)}

    for i in range(1,21):
        metadata_dict.update({'mfcc'+str(i):np.mean(mfcc[i-1])})

    return (metadata_dict)

#upload song route
@app.route('/upload')
def upload():
    return render_template("file_upload_form.html")

#success => after genre prediction
@app.route('/success', methods = ['POST'])
def success():
    #UPLOAD_FOLDER = os.path.join(app.root_path,'uploads')
    UPLOAD_FOLDER = '/uploads'
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    if request.method == 'POST':
        f = request.files['file']
        #os.path.join('C:/Users/DELL/Desktop/projects/MIP_MusicPrediction_final/MUSIC_GENRE_RECOMENDATION_FLASK/uploads/',
        f.save(secure_filename(f.filename))
        f_name = f.filename.split('.')

        if(f_name[-1] != 'wav'):
            dst="file.wav"
            print(f.filename)
            sound = AudioSegment.from_mp3(f.filename)
            
            sound.export(dst, format="wav")
            file_name = dst
        else:
            file_name = f.filename
        genre = {0: 'blues', 1: 'classical', 2: 'country', 3: 'disco', 4: 'hiphop', 5: 'jazz', 6: 'metal', 7: 'pop', 8: 'reggae',9: 'rock'}

        mtdt = getmetadata(f.filename)
        mtdt = np.array(list(mtdt.values()))
        mtdt.reshape(-1,1)
        mtdt_scaled = scaler.transform([mtdt])
        pred_genre = model.predict(mtdt_scaled)
        genre_name = genre[pred_genre[0]]
        #print(session['name'])
        
        with grid_fs.new_file(filename=f.filename,name=session['name'],genre=genre_name,playid='1') as fp:
            fp.write(request.data)
            id=fp._id
            
        return render_template("success.html", name = file_name, genre = genre_name,entry=id,chroma_stft= mtdt[1], Root_mean_square_error= mtdt[2], Fetching_Spectral_Centroid= mtdt[3], Spectral_Bandwidth= mtdt[4], Fetching_Spectral_Rolloff= mtdt[5], Zero_Crossing_Rate= mtdt[6], mfcc= mtdt[7])
    
#Route to render GUI
@app.route('/play')
def play():
    songs = get_songs()
    print(songs)  
    return render_template("play.html", songs=songs)

#Route to stream music
# @app.route('/int:<stream_id>')
# def streammp3(stream_id):
#     def generate():
#         data = return_dict()
#         count = 1
#         for item in data:
#             if item['id'] == stream_id:
#                 song = item['link']
#         with open(song, "rb") as fwav:
#             data = fwav.read(1024)
#             while data:
#                 yield data
#                 data = fwav.read(1024)
#                 logging.debug('Music data fragment : ' + str(count))
#                 count += 1
                
#     return Response(generate(), mimetype="audio/wav")



# def return_dict():
#     #Dictionary to store music file information
#     files=db.fs.files
#     result=files.find_one(sort=[( '_id', -1 )])
#     dict_here = [
#         {'id': 1, 'name': 'test', 'link': 'hiphop.00006.wav', 'genre': 'hip'},
        
#        ]
#     return dict_here

if __name__ == '__main__':
    
    app.secret_key = 'mysecret'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.run(debug = True)
    
    logging.debug("Started Server, Kindly visit http://localhost:" )