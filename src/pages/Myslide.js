import React from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper';

import Slide1 from '../img/tan_main_img1.jpg';
import Slide2 from '../img/tan_main_img2.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default () => {
  return (
    <div className='main_slide'>
        <Swiper
            modules={[Navigation, Pagination]}
            pagination = {{clickable:true}}
            navigation
            loop = {true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src={Slide1} alt="slide1" /></SwiperSlide>
            <SwiperSlide><img src={Slide2} alt="slide2" /></SwiperSlide>
            
        </Swiper>
    </div>
    
  );
};
