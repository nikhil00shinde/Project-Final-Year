import React,{useEffect, useState} from 'react';


export default function AudioComp({info}) {
  
   const languages =  {
    "hi" : "Hindi", 
    "mr" : "Marathi",
    "zh-cn": "Chinese",
    "es" : "Spanish",
    "jp" : "Japanese",
    "fr" :  "French",
    "de" : "German",
    "ta" : "Tamil",
    "en" : "English",
    "ko"  : "Korean",
  };
  
  return (
   <div className='w-6/12'>
    <p>
      <span className='text-xl text-slate-950 hover:text-purple-800 hover:opacity-60 cursor-pointer hover:scale-105'>Generated Audio</span>
    </p>
   <div className='m-2'>
    <p>{languages[info.lang1]}</p>
    <audio src={info.url1} controls/>  
   </div>
   <div className='m-2'>
   <p>{languages[info.lang2]}</p>
    <audio src={info.url2} controls/>  
   </div>
  

   </div>
  )
}
