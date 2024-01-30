import React from 'react';
import MainCarousel from '../../components/homecarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';

const Homepage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className="flex flex-col py-20 space-y-10">
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
      </div>
    </div>
  );
}

export default Homepage;
