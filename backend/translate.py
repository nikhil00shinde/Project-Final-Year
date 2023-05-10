from googletrans import Translator

translator = Translator()

translated_text = translator.translate('안녕하세요.')
print(translated_text.text)

translated_text = translator.translate('안녕하세요.', dest='ja')
print(translated_text.text)

translated_text = translator.translate('veritas lux mea',dest='hi')
print(translated_text.text)

translated_text = translator.translate('veritas lux mea',dest='es')
print(translated_text.text)

translated_text = translator.translate('veritas lux mea',dest='fr')
print(translated_text.text)

translated_text = translator.translate('veritas lux mea',dest='de')
print(translated_text.text)