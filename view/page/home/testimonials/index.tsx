import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { IconBase } from 'react-icons';
import { BiSolidLeftArrow, BiSolidQuoteAltLeft, BiSolidRightArrow } from 'react-icons/bi';

const Testimonials = () => {


  return (
    <div className=' mx-auto max-w-[1280px] '>
      <div className='relative grid h-[1000px] grid-cols-6'>
        <div className=' border-s border-gray-200/80'></div> 
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-x border-gray-200/80'></div>
        <div className='absolute top-10 max-w-[1280px] space-y-10'>
        <div className=' pt-10'>
            <p className='text-center text-red-500'>TESTIMONIAL</p>
            <p className='mx-auto max-w-[700px] text-center text-[39px] font-semibold text-gray-800'>
              What Our Client Say
            </p>
            <p className='mx-auto max-w-[700px] pb-10 text-center text-[16px] font-normal text-gray-800'>
              Lobortis arcu at suspendisse arcu egestas lectus purus magna interdum aliquam scelerisque.
            </p>

            <div className='flex '>
              <div className='flex flex-1  bg-white/40'>
                <div className='max-w-[214px]'>
                  <Image src={'/image/woman-client-1.jpg'} className='' alt='image' width='1500' height='1300' />
                </div>
                <div className='flex flex-col justify-center space-y-5 p-5'>
                  <BiSolidQuoteAltLeft className='text-3xl text-red-500 ' />
                  <p className='text-sm text-gray-800'>
                    Ante varius at tortor auctor dui mi eros auctor consectetur cras velit, neque et tellus nulla
                    viverra natoque aliquam, malesuada viverra adipiscing diam eu auctor id tellus.
                  </p>
                  <p className='text-[17px]	tracking-widest'>Mike John</p>
                </div>
              </div>
              <div className='flex flex-1  bg-white/40'>
                <div className='max-w-[214px]'>
                  <Image src={'/image/woman-client-2.jpg'} className='' alt='image' width='1500' height='1300' />
                </div>
                <div className='flex flex-col justify-center space-y-5 p-5'>
                  <BiSolidQuoteAltLeft className='text-3xl text-red-500 ' />
                  <p className='text-sm text-gray-800'>
                    Ante varius at tortor auctor dui mi eros auctor consectetur cras velit, neque et tellus nulla
                    viverra natoque aliquam, malesuada viverra adipiscing diam eu auctor id tellus.
                  </p>
                  <p className='text-[17px]	tracking-widest'>Mike John</p>
                </div>
              </div>
            </div>

            <div className='flex border-t border-gray-200/80'>
              <div className='flex flex-1  bg-white/40'>
                <div className='max-w-[214px]'>
                  <Image src={'/image/woman-client-1.jpg'} className='' alt='image' width='1500' height='1300' />
                </div>
                <div className='flex flex-col justify-center space-y-5 p-5'>
                  <BiSolidQuoteAltLeft className='text-3xl text-red-500 ' />
                  <p className='text-sm text-gray-800'>
                    Ante varius at tortor auctor dui mi eros auctor consectetur cras velit, neque et tellus nulla
                    viverra natoque aliquam, malesuada viverra adipiscing diam eu auctor id tellus.
                  </p>
                  <p className='text-[17px]	tracking-widest'>Mike John</p>
                </div>
              </div>
              <div className='flex flex-1  bg-white/40'>
                <div className='max-w-[214px]'>
                  <Image src={'/image/woman-client-2.jpg'} className='' alt='image' width='1500' height='1300' />
                </div>
                <div className='flex flex-col justify-center space-y-5 p-5'>
                  <BiSolidQuoteAltLeft className='text-3xl text-red-500 ' />
                  <p className='text-sm text-gray-800'>
                    Ante varius at tortor auctor dui mi eros auctor consectetur cras velit, neque et tellus nulla
                    viverra natoque aliquam, malesuada viverra adipiscing diam eu auctor id tellus.
                  </p>
                  <p className='text-[17px]	tracking-widest'>Mike John</p>
                </div>
              </div>
            </div>

            <div className='mt-5 flex py-10'>
              <div className='h-14 flex-1 border-e-2 border-red-500'></div>
              <div className='flex-1'></div>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Testimonials;
