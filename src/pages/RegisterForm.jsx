import React from 'react';
import PageTitle from '../components/PageTitle';
import DefaultButton from '../components/DefaultButton';

export default function RegisterForm() {
  return (
  <div className=' w-full h-screen flex flex-col justify-start items-center bg-Charcol'>
    <div className='h-2/6 w-10/12 flex flex-col justify-center items-center'>
      <PageTitle pageTitle={'فرم ثبت نام'} />
    </div>
    <div className='h-2/5 w-full flex flex-col justify-start items-center'>
      <DefaultButton title={'ثبت نام'}/>
    </div>
  </div>
  );
}
