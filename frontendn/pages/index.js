import Image from 'next/image'
import { Inter } from 'next/font/google'
import Upload from '../Components/Upload'
import Selection from '../Components/Selection'
import Loader from '../Components/loader'
import AudioComp from '../Components/AudioComp'
import HandWritten from '../Components/HandWritten'
import { useEffect, useState } from 'react'
import { storage } from '../firebase/index';
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage'
import { useContext } from "react";
import AppContext from '../Components/AppContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [file,setFile] = useState("");
  const {info,setInfo} = useContext(AppContext);
  const [showLoader,setShowLoader] = useState(false);

 const uploadImage = () => {
     if(file == null) return
     const imageRef = ref(storage, `images/${file.name}`)
     setShowLoader(true);
     uploadBytes(imageRef, file).then((snapshot) => {
      console.log("Upload done")
      return getDownloadURL(snapshot.ref);
     })
     .then((downloadURL)=>{
      setShowLoader(false)
      setInfo({...info ,urlI: downloadURL})
      console.log("Got URL")
      let info2 = info
      info2.urlI = downloadURL
        fetch("user/getText", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : "*"
          },
          body: JSON.stringify(info2),
        })
        .then(response=> response.json())
        .then((data)=> {
          console.log("Backend repsonded Text !!!")
            setInfo({...info, ...data})
            let info1 = {...info,...data}

              fetch("/user/getAudio1",
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin' : "*"
                },
                body: JSON.stringify(info1),
              }).then(response => response.json())
              .then((data)=>{
                console.log("Backend repsonded Audio1 !!!")
                setInfo({...info1, ...data})
                console.log("1",info1)
                info1 = {...info1,...data}
                console.log("2",info1)

                fetch("/user/getAudio2",
                 {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin' : "*"
                    },
                    body: JSON.stringify(info1),
                 }).then(response => response.json())
                 .then((data)=>{
                   console.log("Backend repsonded Audio2 !!!")
                   console.log("3",info1)

                   setInfo({...info1, ...data})
                 })
            
              })

        })
      
     
     })
 };



  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-10 bg-gradient-to-r from-white-50 to-slate-900 ">
      <p className='text-4xl mb-10'></p>
      <Upload setFile={setFile}/>
      
      <Selection uploadImage={uploadImage} showLoader={showLoader} info={info} setInfo={setInfo}/>
      <div className='mt-12 mx-12 border-2	w-full flex items-center justify-evenly'>
      <AudioComp  info={info} />
      <HandWritten/>
      </div>
    </main>
)
}
