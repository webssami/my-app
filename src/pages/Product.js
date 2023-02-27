import food01 from '../img/food/food1.jpg';
import food02 from '../img/food/food2.jpg';
import food03 from '../img/food/food3.jpg';
import food04 from '../img/food/food4.jpg';
import food05 from '../img/food/food5.jpg';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Product() {
    return (
        <div>
            <h1>제품리스트 화면 swiper 4개씩</h1>
            <div className="list_sw">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={4}
                loop = {true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <img src={food01} alt="food01" />
                    <div className='sl_text'>food01</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food02} alt="food02" />
                    <div className='sl_text'>food02</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food03} alt="food03" />
                    <div className='sl_text'>food03</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food04} alt="food04" />
                    <div className='sl_text'>food04</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food05} alt="food05" />
                    <div className='sl_text'>food05</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food03} alt="food03" />
                    <div className='sl_text'>food03</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food04} alt="food04" />
                    <div className='sl_text'>food04</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food05} alt="food05" />
                    <div className='sl_text'>food05</div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
