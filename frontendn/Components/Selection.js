import React, { useState } from 'react'
import Loader from './loader';
import Link from 'next/link';

function Selection({uploadImage, showLoader, setInfo,info}) {

  const languages = [
    {
      lang : "Hindi", code : "hi"
    },
    {
      lang : "Marathi", code : "mr"
    },
    {
      lang : "Chinese", code : "zh-cn"
    },
    {
      lang : "Spanish", code : "es"
    },
    {
      lang : "Japanese", code : "ja"
    },
    {
      lang : "French", code : "fr"
    },
    {
      lang : "German", code : "de"
    },
    {
      lang : "Tamil", code : "ta"
    },
    {
      lang : "English", code : "en"
    },
    {
      lang : "Korean", code : "ko"
    },
    
  ];

  const onOptionChangeHandler = (event) => {
    const lang2 = event.target.value;
    console.log("Language has been selected");
    setInfo({...info, lang1:"en", lang2})
}


  return (<div className='mt-10 w-6/12 flex space-x-4 justify-between items-end'>

                <div>
                  <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Language</label>
                  <select
                  value={info.lang2}
                   onChange={onOptionChangeHandler} id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected >Choose a language</option>
                      {
                        languages.map((el) => {
                          return (
                                 <option value={el.code}>
                                  {el.lang}
                                 </option>
                          )
                        })
                      }
                      
                    </select>
                  </div>
                  {!showLoader ?  
                    <button type="button" className="rounded-md bg-gradient-to-r from-red-400 to-blue-500 hover:from-red-500 hover:to-gray-500 py-3 px-12 hover:scale-90"
                    onClick={uploadImage}
                    >
                      Proceed
                    </button> : <Loader/>
                  }
                      <Link href="/text">
                    <button type="button" className="rounded-md bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-cyan-500 hover:to-indigo-500 py-3 px-12  hover:scale-90"
                    >
                       View Text
                    </button>
                      </Link>
       </div>
)}

export default Selection;