import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { IconBase } from 'react-icons';
import { BiSolidLeftArrow, BiSolidQuoteAltLeft, BiSolidRightArrow } from 'react-icons/bi';

const FeaturedWorks = () => {


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
          <div className='flex'>
            <div className='flex-1 space-y-2'>
              <p className='text-red-500'>PORTFOLIO              </p>
              <p className='max-w-[500px] text-[39px] font-semibold text-gray-800'>We Help Corporate to Manage Event</p>
              <p className='max-w-[430px] pb-10 text-[16px] font-semibold text-gray-800'>
                Sit vestibulum nec nam porttitor nibh. Urna at faucibus aliquet dolor. Facilisis id diam pellentesque et
                odio. Potenti sagittis massa lorem arcu sed diam. Consectetur elit sit in donec vitae blandit tincidunt
                eu. Sed nulla vel diam commodo. Placerat cursus sed blandit eu odio.
              </p>
            </div>
            <div className='inline-flex flex-1  justify-end'>
              <div className='w-[214px]   '>
                <div className='border-y border-gray-200/80 py-2 text-center hover:shadow-md'>
                  View Our Works
                </div>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='flex-1'>
              <div className='relative  mb-5 '>
                <Image src={'/image/event-work-1.jpg'} className='' alt='image' width='1500' height='1300' />
                <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30'></div>
              </div>
              <div className='border-s-4 border-red-500 pl-3'>
                <p className='text-xl font-semibold'>Hexatron Factory Open Day</p>
              </div>
            </div>
            <div className='flex-1'>
              <div className='pb-5'>
                <Image src={'/image/event-work-3.jpg'} className='' alt='image' width='1500' height='1300' />
              </div>
              <div className='border-s-4 border-red-500 pl-3'>
                <p className='text-xl font-semibold'>Hexatron Factory Open Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
