
import React from 'react';

import Myslide from './Myslide';

const Home = () => {

    return (
        <div className='page_wrap'>
            <h1>Home 화면-swiper</h1>
            <div className='slide_info'>
                <div className='slide_academy'>
                    <Myslide></Myslide>
                </div>
                <div className='info'>
                    소개
                </div>
            </div>
        </div>
        
    
    );
}



export default Home;