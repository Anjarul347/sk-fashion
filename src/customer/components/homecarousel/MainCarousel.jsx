import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
    const items = mainCarouselData.map((item)=> <img src={item.image} alt="" className="cursor-pointer" role="presentation"/>)
  return (
    <AliceCarousel
    items={items}
    autoPlay
    disableButtonsControls
    autoPlayInterval={2500}
    animationType="slide"
    infinite
    
    />
  );
}

export default MainCarousel;
