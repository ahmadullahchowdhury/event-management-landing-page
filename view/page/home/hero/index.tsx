import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='relative'>
      <div
        className='relative mx-auto overflow-hidden bg-cover bg-center'
        style={{ backgroundImage: 'url(/image/home/hero-bg.jpg)' }}
      >
        {/* bg-[#1c809e] */}
        <div className='inset-0 bg-[#242a56d7] backdrop-blur-[2px]	 opacity-90'>
          <div className='mx-auto flex h-[800px] 2xl:min-h-screen max-w-[1280px] flex-col justify-center '>
            <div className=' md:px-16 2xl:px-0'>
              <p className='drop-shadow-2xl mx-auto mb-5 max-w-[234px] text-center text-[18px] font-bold text-white md:mx-0 md:max-w-[650px] md:text-left md:text-[26px] lg:text-left lg:text-2xl'>
              Where Data Meets Precision
              </p>
              <h2 className='drop-shadow-2xl mx-auto max-w-[334px] text-center text-[28px] font-bold text-white md:mx-0 md:max-w-[790px] md:text-left  md:text-[36px] lg:text-[60px] lg:leading-[70px]'>
              Accuracy You Can Trust, Results You Can See
              </h2>
              <p className=' mx-auto mt-[14px] max-w-[235px] text-center text-[16px] font-normal text-white md:mx-0 md:mt-3 md:max-w-[680px] md:text-left md:text-base'>
              We specialize in mastering the intricacies of data to empower your business success. Our precision-driven services ensure flawless data management, enabling you to focus on growth and innovation. Trust us to transform your data into a powerful asset for your business
              </p>

              <Link href={'/services'} className='mt-[50px] drop-shadow-2xl flex justify-center md:justify-start'>
                <div className='inline-flex rounded-lg  bg-[#f6c32c] px-10 py-3 text-black'>Explore More</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
