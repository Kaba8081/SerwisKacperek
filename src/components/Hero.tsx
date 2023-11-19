import React from 'react';
import styles from '../style';


const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-items items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-text_color ss:leading-[100px] leading-[75px]'>
        “Najlepsze <br className='sm:block hidden'/>
        <span className='text-gradient sm:pl-[28px]'>Usługi Informatyczne </span> <br className='sm:block hidden'/>
        <span className='sm:pl-[28px]'>w Regionie.”</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[775px] mt-5 z-[5]`}>
        Witamy w Serwisie Kacperek – miejscu, gdzie pasja do technologii spotyka się z profesjonalizmem i ludzkim podejściem
        </p>
        <div>
          {/* Tutaj bedzie jakies logo*/}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero