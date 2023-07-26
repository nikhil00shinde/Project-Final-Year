import React from 'react';
import Link from 'next/link';



export default function HandWritten() {
  
  return (
    <div className='w-4/12 flex items-center'>
     <p>
      <span className='text-xl text-slate-950 hover:text-purple-800 hover:opacity-60 cursor-pointer hover:scale-105'>
      Handwritten Note
      </span>
    </p>
     <Link href="/handnotes">
     <button className='handwritten rounded-lg ml-6 py-2 px-6 hover:scale-90'>
      View
     </button>
     </Link>
    </div>
  )
}
