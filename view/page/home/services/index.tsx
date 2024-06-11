import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';


const Services = () => {
  return (
    <div className=' mx-auto max-w-[1280px] '>
      <div className='relative grid h-[3000px] grid-cols-6'>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-x border-gray-200/80'></div>
        <div className='absolute top-10 max-w-[1280px] space-y-10'>
          <div className=''>
            <div>
              <p className='text-center text-red-500'>OUR SERVICES </p>
              <p className='mx-auto max-w-[700px] text-center text-[39px] font-semibold text-gray-800'>
                Corporate Event Management
              </p>
              <p className='mx-auto max-w-[800px] pb-10 pt-4 text-center text-[16px] font-normal text-gray-800'>
                Orci, gravida at dolor penatibus praesent. Id ac nunc nunc elementum vitae nunc cursus. Nunc cras
                facilisis fermentum elementum, suspendisse augue dolor.
              </p>
              <div className='mx-auto  w-[426px]  '>
                <div className=' border-y border-gray-200/80 py-2 text-center hover:shadow-md'>View Our Workss</div>
              </div>

              <div className='flex pt-20'>
                <div className='flex-1'>
                  <div className='pb-5 '>
                    <Image src={'/image/event-service-3.jpg'} className='' alt='image' width='1500' height='1300' />
                  </div>
                  <div className='border-s-4 border-red-500 pl-3'>
                    <p className='text-xl font-semibold'>Hexatron Factory Open Day</p>
                  </div>
                  <p className='text-md p-4 font-normal'>
                    Tempor sit dictum volutpat tortor. Mauris eleifend commodo mi pharetra aliquam sed. Commodo odio
                    quis neque.
                  </p>
                </div>
                <div className='flex-1'>
                  <div className='pb-5'>
                    <Image src={'/image/event-service-5.jpg'} className='' alt='image' width='1500' height='1300' />
                  </div>
                  <div className='border-s-4 border-red-500 pl-3'>
                    <p className='text-xl font-semibold'>Hexatron Factory Open Day</p>
                  </div>
                  <p className='text-md p-4 font-normal'>
                    Tempor sit dictum volutpat tortor. Mauris eleifend commodo mi pharetra aliquam sed. Commodo odio
                    quis neque.
                  </p>
                </div>
                <div className='flex-1'>
                  <div className='pb-5'>
                    <Image src={'/image/event-service-6.jpg'} className='mr-2' alt='image' width='1500' height='1300' />
                  </div>
                  <div className='border-s-4 border-red-500 pl-3'>
                    <p className='text-xl font-semibold'>Hexatron Factory Open Day</p>
                  </div>
                  <p className='text-md p-4 font-normal'>
                    Tempor sit dictum volutpat tortor. Mauris eleifend commodo mi pharetra aliquam sed. Commodo odio
                    quis neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
