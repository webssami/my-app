import React, {useRef, useState} from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Pagination, Navigation, Autoplay} from 'swiper';

import Slide1 from '../img/tan_main_img1.jpg';
import Slide2 from '../img/tan_main_img2.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; //페이지블릿버튼
import 'swiper/css/navigation'; //이전, 다음버튼

SwiperCore.use([Autoplay, Pagination])

/* onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
    onMouseLeave={() => swiperRef.current.swiper.autoplay.start()} */
export default function Myslide() {
  const swiperRef = useRef(null)
  const [btn, setBtn] = useState(false);
  const posBtn = useRef(null);
  return (
    <div className='main_slide'>
      
        <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            pagination = {{clickable:true}}
            navigation
            loop = {true}
            autoplay = {{"delay":5000, "disableOnInteraction": false,
            
          }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src={Slide1} alt="slide1" /></SwiperSlide>
            <SwiperSlide><img src={Slide2} alt="slide2" /></SwiperSlide>
            
        </Swiper>
        <button onClick={() => {
          setBtn(!btn);
          if(btn === false){
            swiperRef.current.swiper.autoplay.stop();
            posBtn.current.style.background = "#f40";
            posBtn.current.innerText ="재생"
          }else{
            swiperRef.current.swiper.autoplay.start()
            posBtn.current.style.background = "#ff0";
            posBtn.current.innerText ="정지"
          }
        }} ref={posBtn}>정지</button>
    </div>
    
  );
};
