import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../assets/logo.webp';
import DefaultButton from '../components/DefaultButton';

export default function Home() {
  return (
    <>
      <div className='font-Gandom flex flex-col justify-start items-center w-full h-screen bg-Charcol max-lg:hidden'>
        <header className='flex flex-row justify-center items-start w-full'>
          <Navbar />
        </header>
        <div className='w-full h-3/5 flex flex-col justify-center items-center'>
          <div className='w-4/12  max-2xl:w-6/12'>
            <img src={Logo} alt='Logo' className='h-full w-full' />
          </div>
          <div className='w-4/12 h-1/6 flex flex-row justify-center items-center max-2xl:w-6/12 relative -top-10'>
            <p className='text-3xl w-full h-full flex flex-row justify-center items-center text-white/80'>
                آینده به نخ ماست
            </p>
          </div>
        </div>
        <footer className='flex flex-col justify-end items-center w-full h-2/5 bg-Charcol'>
          <div className='flex flex-col justify-center items-center w-full h-4/6 backdrop-blur bg-white/80 text-Charcol rounded-t-lg'>
            <div className='text-2xl flex flex-col justify-center items-center gap-2'>
              <p>آدرس : تهران جردن ناهید غربی - گیلان رشت میدان دکتر حشمت</p>
              <a href='tel:*6655*665503%23'>تلفن تماس : 28427686 - 021</a>
            </div>
            <div>
              <p className='text-xl'>
                کلیه حقوق مادی و معنوی متعلق به هلدینگ لیما می باشد .
              </p>
            </div>
          </div>
        </footer>
      </div>

      <div className='font-Gandom flex flex-col justify-start items-center w-full h-screen bg-Charcol max-2xl:hidden 2xl:hidden max-lg:block max-md:block max-sm:block'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-8/12 h-full max-sm:w-10/12'>
              <img src={Logo} alt='Logo' className='w-full h-full'/>
          </div>
          <div className='flex flex-row justify-center items-center w-8/12 max-sm:w-10/12'>
            <p className='text-3xl w-full flex flex-row justify-center items-center text-white/80 max-lg:text-3xl max-md:text-2xl max-sm:text-lg'>
              آینده به نخ ماست
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 w-full h-2/6'>
          <div className='flex flex-row justify-center items-center gap-2 w-full'>
            <DefaultButton title={'فایل راهنما'} path={'/helpfile'} />
            <DefaultButton title={'قوانین و مقررات'} path={'/rules'} />
          </div>
          <div className='flex flex-row justify-center items-center gap-2 w-full'>
            <DefaultButton title={'فرم ثبت نام'} path={'https://survey.porsline.ir/s/24bbwg2W'} />
            <DefaultButton title={'درباره ما'} path={'/aboutus'} />
          </div>
          <div className='flex flex-row justify-center items-center gap-2 w-full'>
            <DefaultButton title={'مرکز تولیدکنندگان'} path={'****'} />
          </div>
        </div>
        <footer className='flex flex-col justify-end items-center w-full h-2/6 backdrop-blur bg-Charcol max-sm:relative top-20'>
          <div className='flex flex-col justify-around items-center w-full h-4/6 backdrop-blur bg-white/80 text-Charcol rounded-t-lg'>
            <div className='text-xl flex flex-col justify-center items-center gap-2 max-sm:text-xs'>
              <p>آدرس : تهران جردن ناهید غربی - گیلان رشت میدان دکتر حشمت</p>
              <a href='tel:*6655*665503%23'>تلفن تماس : 28427686 - 021</a>
            </div>
            <div>
              <p className='text-lg max-sm:text-xs'>
                کلیه حقوق مادی و معنوی متعلق به هلدینگ لیما می باشد .
              </p>
            </div>
          </div>
        </footer>
      </div>  
    </>
  );
}
