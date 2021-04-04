import joblib
from flask import *
import pickle
import librosa
import numpy as np
import bcrypt
from sklearn.preprocessing import MinMaxScaler
from os import path
from pydub import AudioSegment
from flask import Flask, render_template, request, redirect, url_for, session
from flask_pymongo import PyMongo
import re


app = Flask(__name__,template_folder='template')

model = pickle.load(open('model_svm.pkl','rb'))
scaler = pickle.load(open('scaler.pkl','rb'))
#model = joblib.load('model_4.mdl')


app.config['MONGO_DBNAME'] = 'mip'
app.config['MONGO_URI'] = 'mongodb+srv://sanyam:sanyam@cluster0.s7zmx.mongodb.net/test'
mongo = PyMongo(app)

#login
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/')
def index():
    if 'name' in session:
        message='You are logged in as ' + session['name']
        return render_template('home.html',message=message) 

    return render_template('signin.html')

@app.route('/logout')
def logout():
    session.pop('name',None)
    return redirect(url_for('index'))

@app.route('/login', methods=['POST'])
def login():
    error=None
    users = mongo.db.users
    login_user = users.find_one({'name' : request.form['name']})
    hashed=login_user['password'].decode('utf-8')
    if login_user:
        if bcrypt.hashpw(request.form['password'].encode('utf-8'), (hashed)) == (hashed):
            session['name'] = request.form['name']
            return redirect(url_for('index'))
        
    error='Invalid username/password combination'
    return render_template('signin.html',error=error)  

@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name' : request.form['name']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'name' : request.form['name'], 'password' : (hashpass)})
            session['name'] = request.form['name']
            return redirect(url_for('index'))
        
        return 'That username already exists!'

    return render_template('index.html')

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

@app.route('/upload')
def upload():
    return render_template("file_upload_form.html")

@app.route('/success', methods = ['POST'])
def success():
    if request.method == 'POST':
        f = request.files['file']
        f.save(f.filename)
        f_name = f.filename.split('.')

        if(f_name[-1] != 'wav'):
            file_name = 'Upload only wav file'
        else:
            file_name = f.filename
        genre = {0: 'blues', 1: 'classical', 2: 'country', 3: 'disco', 4: 'hiphop', 5: 'jazz', 6: 'metal', 7: 'pop', 8: 'reggae',9: 'rock'}

        mtdt = getmetadata(f.filename)
        mtdt = np.array(list(mtdt.values()))
        mtdt.reshape(-1,1)
        mtdt_scaled = scaler.transform([mtdt])
        pred_genre = model.predict(mtdt_scaled)
        genre_name = genre[pred_genre[0]]
        return render_template("success.html", name = file_name, genre = genre_name)

if __name__ == '__main__':
    
    app.secret_key = 'mysecret'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.run(debug = True)