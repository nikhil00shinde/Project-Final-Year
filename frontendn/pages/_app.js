import AppContext from '../Components/AppContext'
import '@/styles/globals.css'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [info, setInfo] = useState({
    urlI:"",
    url1:"",
    url2:"",
    lang1:"en",
    lang2:"",
    text1:"",
    text2:"",
    urlP:""
  });

  return (
  <AppContext.Provider
   value={{
    info: info,
    setInfo: setInfo
   }}
  >
  <Component {...pageProps} />
  </AppContext.Provider>
  )

}
