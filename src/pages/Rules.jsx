import React from 'react';
import PageTitle from '../components/PageTitle';

export default function Rules() {
  return (
  <div className='w-full h-full flex flex-col justify-start items-center bg-Charcol'>
    <div className='h-52 w-10/12 flex flex-col justify-center items-center'>
        <PageTitle pageTitle={'قوانین اخذ نمایندگی'} />
    </div>
    <div className='w-full rounded flex flex-col justify-start items-center  pb-10'>
      <div className='w-10/12 rounded backdrop-blur bg-white/80 p-10 shadow-xl'>
      <ul className='flex flex-col justify-center items-start gap-4 font-Gandom text-2xl text-Charcol max-md:text-xl max-sm:text-lg'>
          <li>
            1 - دارا بودن گواهی عدم سوء پیشینه کیفری .
          </li>
          <li>
            2 - گواهی عدم اعتیاد به مواد مخدر .
          </li>
          <li>
            3 - قبول و تعهد کامل نسبت به آیین نامه فرهنگ و رفتار سازمانی و نظام نامه کیفی و اخلاقی شرکت .
          </li>
          <li>
            4 - وضعيت مالكيت : سند شش دانگ به نام متقاضی و يا اجاره نامه یک ساله محضری به نام متقاضی ( درصورت قبولی در مصاحبه و اخذ نمایندگی مهلت ۶۰ روزه جهت اجاره و تجهیز ملک داده میشود ) .
          </li>
          <li>
            5 - وضعيت نظام وظيفه ( آقايان ) : داشتن كارت پايان خدمت و يا معافيت دائم برای متقاضی .
          </li>
          <li>
            6 - مدرك تحصيلی : داشتن مدرك تحصيلی ديپلم و يا بالاتر ( اولويت با مدارك بالاتر می باشد ) .
          </li>
          <li>
            7 - سوابق : دارا بودن تجربه و تخصص در یکی از زمینه های مارکتینگ و یا پوشاک .
          </li>
          <li>
            8 - توان سرمايه گذاری : دارا بودن توانایی مالی کافی جهت اجرای استانداردهای مورد نظر شرکت  
          </li>
          <li>
            تذکر : در صورت نداشتن شرايط فوق درخواست جنابعالي قابل بررسی نبوده و هيچگونه پاسخی ارسال نخواهد شد .
          </li>
          <li>
            تذكر : ارسال اطلاعات و شرایط متقاضی برای اخذ نمایندگی هيچگونه تعهدی مبنی بر اعطاء امتياز نمايندگي براي شركت در بر نخواهد داشت .
          </li>
          <li>
            تذكر : هزینه های استاندارد سازی ، نصب تابلو و تهيه كليه ملزومات و تجهیزات بر عهده شخص متقاضی می باشد .
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
