import Link from 'next/link'
import React from 'react'
import { useContext } from "react";
import AppContext from '../Components/AppContext'

function text() {
  const {info,setInfo} = useContext(AppContext);
  return (
    <div>
      <Link href="/">
      <button className='px-6 py-2 border-2 text-center bg-stone-700 text-white hover:scale-90'>
      Back to home
      </button>
      </Link>
      
        {/* to see image */}
      <div className='content'>
          <div className='flex justify-center'>
              <img
              src={info.urlI}
              alt="Picture of the author"
              width="275" 
              height="275"
            />
          </div>
           {/* to see text */}
          <div className='flex '>
            <div className='bg-white m-5 h-80  w-2/4 border-4 overflow-y-scroll text-black text-2xl'>
             {info.text1}
          </div>
          <div className='bg-white m-5 h-80  w-2/4 border-4 overflow-y-scroll text-black text-2xl'>
          {info.text2}
          </div>
          </div>
      </div>
    </div>
  )
}

export default text