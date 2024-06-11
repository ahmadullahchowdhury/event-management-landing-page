import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { PiLayoutFill } from 'react-icons/pi';

const Hero = () => {
  return (
    <div className='relative'>
      <div
        className='relative mx-auto overflow-hidden bg-cover bg-center'
        style={{ backgroundImage: 'url(/image/hero-bg.jpg)' }}
      >
        {/* bg-[#1c809e] */}
        <div className=' inset-0 flex h-[800px]  items-center justify-center bg-black/45 opacity-90 backdrop-blur-[2px] 	 2xl:min-h-screen'>
          {/* <div className=' grid grid-cols-2 items-center   '>
            <div className='flex items-end  bg-red-500   md:px-16 2xl:px-0'>
              <p className='mx-auto flex items-center gap-2 text-white md:max-w-[800px]'>
                <FaPlayCircle color='red' size={30} />
                PLAY THE VIDEO
              </p>
            </div>
            <div className=' bg-red-500  md:px-16 2xl:px-0'>
              <h2 className='mx-sauto max-w-[334px] text-center text-[28px] font-semibold text-white drop-shadow-2xl md:mx-0 md:max-w-[800px] md:text-left  md:text-[36px] lg:text-[70px] lg:leading-[90px]'>
                The UK’s Best Event Management Agency for Corporate
              </h2>
              <p className=' mx-auto mt-[14px] max-w-[235px] text-center text-[16px] font-normal text-white md:mx-0 md:mt-3 md:max-w-[680px] md:text-left md:text-base'>
                A integer hac in id. Mollis consequat, consectetur egestas in quam. Id velit eleifend tincidunt varius
                sagittis sed ut. Pretium, risus ac augue arcu ullamcorper semper integer.
              </p>
              <Link href={'/services'} className='mt-[50px] flex justify-center drop-shadow-2xl md:justify-start'>
                <div className='inline-flex rounded-lg  border-2  px-5 py-1.5 text-white'>Explore More</div>
              </Link>
            </div>
          </div> */}

          <div className='grid grid-cols-2'>
            <div className='flex items-end justify-center '>
              <div className='mx-auto flex items-center gap-2 text-white md:max-w-[800px]'>
                <FaPlayCircle className='text-red-500' size={40} />
                <p className='text-lg'> PLAY THE VIDEO </p>
              </div>
            </div>

            <div className='   md:px-16 2xl:px-0'>
              <h2 className='mx-sauto max-w-[334px] text-center text-[28px] font-semibold text-white drop-shadow-2xl md:mx-0 md:max-w-[800px] md:text-left  md:text-[36px] lg:text-[70px] lg:leading-[80px]'>
                The UK’s Best Event Management Agency for Corporate
              </h2>
              <p className=' mx-auto mt-[14px] max-w-[235px] text-center text-[16px] font-normal text-white md:mx-0 md:mt-3 md:max-w-[680px] md:text-left md:text-base'>
                A integer hac in id. Mollis consequat, consectetur egestas in quam. Id velit eleifend tincidunt varius
                sagittis sed ut. Pretium, risus ac augue arcu ullamcorper semper integer.
              </p>
              <Link href={'/services'} className='mt-[50px] flex justify-center drop-shadow-2xl md:justify-start'>
                <div className='inline-flex rounded-lg  border-2  px-5 py-1.5 text-white'>Explore More</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
