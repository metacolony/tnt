import React from 'react';
import DefaultButton from '../components/DefaultButton';
import PageTitle from '../components/PageTitle';

export default function HelpFile() {

    const downloadFile = async () => {
      const fileURL = `${process.env.PUBLIC_URL}/nakhchi sho.pdf`;
      window.open(fileURL, '_blank');
    }

  return (
    <div className='w-full h-screen flex flex-col justify-start items-center bg-Charcol'>
      <div className='h-2/6 w-10/12 flex flex-col justify-center items-center'>
        <PageTitle pageTitle={'دانلود فایل راهنما'} />
      </div>
      <div className='h-2/5 w-full flex flex-col justify-start items-center'>
        <DefaultButton eventName={downloadFile} title={'دانلود'} />
      </div>
    </div>
  );
}
