'use client';
import { Fragment } from 'react';
import AboutUs from 'view/page/home/about-us';
import FeaturedWorks from 'view/page/home/featuredWorks';
import Hero from 'view/page/home/hero';
import Services from 'view/page/home/services';
import Testimonials from 'view/page/home/testimonials';

const PageBody = () => {
  return (
    <Fragment>
      <Hero />
      <AboutUs/>
      <FeaturedWorks />
      <Testimonials />
      <Services />
    </Fragment>
  );
};

export default PageBody;
