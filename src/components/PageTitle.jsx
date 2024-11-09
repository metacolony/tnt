import React from 'react';

export default function PageTitle({ pageTitle }) {
  return (
    <h1 className='font-Gandom text-4xl bg-white/80 backdrop-blur text-Charcol w-full h-2/6 flex flex-row justify-center items-center rounded shadow-xl max-md:text-3xl max-sm:text-2xl'>
        { pageTitle }
    </h1>
  )
}
