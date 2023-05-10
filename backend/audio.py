from gtts import gTTS
  
mytext = '안녕하세요'

language = 'es'
  
myobj = gTTS(text=mytext, lang=language, slow=False)
myobj.save("welcome.mp3")