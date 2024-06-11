import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { IconBase } from 'react-icons';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const AboutUs = () => {
  const data = [
    {
      icon: '/image/services/service-0.jpg',
      title: 'Data Entry',
      desc: 'We provide both online and offline data entry services, as well as document data entry, ensuring your data is meticulously handled and entered with precision.'
    },
    {
      icon: '/image/services/service-1.jpg',
      title: 'Data Management',
      desc: 'From data cleansing and processing to data conversion and other customized data solutions, we manage your data to maintain its accuracy and usability.'
    },
    {
      icon: '/image/services/service-2.jpg',
      title: 'Data Typing',
      desc: 'Our data typing services include rewriting from scanned PDFs or images, and delivering clean and accurate digital text from any source material.'
    },
    {
      icon: '/image/services/service-3.jpg',
      title: 'Excel',
      desc: 'We handle all kinds of Excel work, including data analysis, formatting, and complex spreadsheet management, making your data work for you.'
    },
    {
      icon: '/image/services/service-4.jpg',
      title: 'Data Services',
      desc: 'Our specialized services include data scraping, extraction, collection, CRM data entry (HubSpot, Zoho), manual data mining, WordPress product '
    },
    {
      icon: '/image/services/service-5.jpg',
      title: 'Design',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.'
    }
  ];
  const [selected, setSelected] = useState(0);

  const [countStarted, setCountStarted] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust this value based on when you want the count to start
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCountStarted(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div className=' mx-auto max-w-[1280px] '>
      <div className='relative grid h-[900px] grid-cols-6'>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-s border-gray-200/80'></div>
        <div className=' border-x border-gray-200/80'></div>
        <div className='absolute top-10 max-w-[1280px]'>
          <div className='flex   '>
            <div className='flex-1 space-y-2'>
              <p className='text-red-500'>About Us</p>
              <p className='max-w-[500px] text-[39px] font-semibold text-gray-800'>We Help Corporate to Manage Event</p>
              <p className='max-w-[430px] pb-10 text-[16px] font-semibold text-gray-800'>
                Sit vestibulum nec nam porttitor nibh. Urna at faucibus aliquet dolor. Facilisis id diam pellentesque et
                odio. Potenti sagittis massa lorem arcu sed diam. Consectetur elit sit in donec vitae blandit tincidunt
                eu. Sed nulla vel diam commodo. Placerat cursus sed blandit eu odio.
              </p>

              <div className='flex max-w-[427px] bg-[#ededed] bg-opacity-65 py-5'>
                <div className='max-w-[214px] flex-1 '>
                  <p className='text-center text-[30px]'>1994</p>
                  <p className='text-center text-[11px]'>ESTABLISHED</p>
                </div>
                <div className='max-w-[214px] flex-1 '>
                  <p className='text-center text-[30px]'>1994</p>
                  <p className='text-center text-[11px]'>ESTABLISHED</p>
                </div>
              </div>
            </div>

            <div className='flex-1'>
              <div className=''>
                <Image src={'/image/image-1.jpg'} className='mr-2' alt='image' width='1500' height='1300' />
              </div>
            </div>
          </div>

          <div className='flex pt-32'>
            {Array(6)
              .fill(null)
              .map((item, index) => (
                <div className='py-10 border-y hover:shadow-xl'>
                  <div className='flex justify-center   mx-auto  w-[213px]'>
                    <Image src={'/image/client-logo-1.png'} className='mr-2' alt='image' width='130' height='300' />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
