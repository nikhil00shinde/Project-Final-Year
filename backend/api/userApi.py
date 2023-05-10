import uuid 
from flask import Blueprint, request, jsonify, send_file
import pyrebase
import os
config = {
  "apiKey": "AIzaSyCgO9knPy6Ez30yL3Ax-iMOVFrUcjQzb-8",
  "authDomain": "apptext-ee43e.firebaseapp.com",
  "projectId": "apptext-ee43e",
  "storageBucket": "apptext-ee43e.appspot.com",
  "messagingSenderId": "1019363607576",
  "appId": "1:1019363607576:web:75f3e7c6bbe5ff25f02f6d",
  "databaseURL":""
}
firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

userApi = Blueprint('userApi', __name__)

from PIL import Image
import pytesseract
import requests
import io

from gtts import gTTS

from googletrans import Translator
translator = Translator()


@userApi.route("/getText",methods=['POST'])
def createText():
  try:
    #  image to text
     data = request.get_json()
     urlI = data.get('urlI', '')
     lang1 = data.get("lang1","")
     lang2 = data.get("lang2","")

     response1 = requests.get(urlI)
     img = Image.open(io.BytesIO(response1.content))
     pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
     text1 = pytesseract.image_to_string(img)

    #  translate text
     text2 = translator.translate(text1,dest=lang2)
     text2 = text2.text

     return jsonify(
          text1 = text1,
          text2 = text2,
     )
  except Exception as e:
          return f"An Error Occured: {e}"   

@userApi.route("/getAudio1",methods=['POST'])
def createAudio1():
  try:
     # convert to audio and upload to firebase
     data = request.get_json()
     text1 = data.get("text1","")
     lang1 = data.get("lang1","")
     text2 = data.get("text2","")
     lang2 = data.get("lang2","")
     
     myobj1 = gTTS(text=text1, lang=lang1, slow=False)
     myobj1.save("welcome1.mp3")
     storage.child("audios/welcome1.mp3").put("welcome1.mp3")
     audio1 = storage.child("audios/welcome1.mp3").get_url(None)

     text_file1 = open("text1.txt", "w", encoding="utf-8")
     text_file1.write(text1)
     text_file1.close()

     return jsonify (
          url1  = audio1
     ), 200
  except Exception as e:
          return f"An Error Occured: {e}"

@userApi.route("/getAudio2",methods=['POST'])
def createAudio2():
  try:
     data = request.get_json()
     text2 = data.get("text2","")
     lang2 = data.get("lang2","") 
     myobj2 = gTTS(text=text2, lang=lang2, slow=False)
     myobj2.save("welcome2.mp3")
     storage.child("audios/welcome2.mp3").put("welcome2.mp3")
     audio2 = storage.child("audios/welcome2.mp3").get_url(None)
      # text
     
     return jsonify (
          url2  = audio2,
     ), 200
  except Exception as e:
          return f"An Error Occured: {e}"

@userApi.route('/add', methods=['POST'])
def create():
      try:
          data = request.get_json()
          urlI = data.get('urlI', '')
          # os.system('handwritten.js -f "C:/Users/acer/Desktop/OCR/project/backend/text1.txt" -o "C:/Users/acer/Desktop/OCR/project/backend/outputtext1.pdf"')
          storage.child("text/text1.pdf").put("outputtext1.pdf")
          urlP = storage.child("text/text1.pdf").get_url(None)
          # os.system('handwritten.js -f "text2.txt" -o "outputtext2.pdf"')
          return jsonify(
                urlP = urlP
               ), 200
      except Exception as e:
          return f"An Error Occured: {e}"
      
