import React, { useEffect } from 'react'
import Link from 'next/link';
import { useContext } from "react";
import AppContext from '../Components/AppContext'
import Loader from '@/Components/loader';



function Handnotes({}) {
  const {info,setInfo} = useContext(AppContext);
  useEffect(()=>{
    fetch("user/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : "*"
      },
      body: JSON.stringify(info)
    })
    .then(response=> response.json())
    .then((data)=> {
      console.log("Backend repsonded!!!! for pdf")
        setInfo({...info, ...data})
        console.log(data.urlP)
    })
  },[info])
   
  return (
    <div className='handwritten_page'>
    {
      info.urlP.length ?  (<>
        <Link href="/">
        <button className='px-6 py-2 border-2 text-center bg-stone-700 text-white hover:scale-90'>
        Back to home
        </button>
        </Link>
        <div className='content'>
        <object data={info.urlP} type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href={info.urlP}>to the PDF!</a></p>
    </object>
        </div>
        </>)
       : 
    <Loader/>
    }
    </div>
  )
}



export default Handnotes;

