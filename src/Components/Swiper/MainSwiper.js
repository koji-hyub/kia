import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import Style from './MainSwiperStyle';
import Text from '../Text/Text';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

// SwiperCore에 필요한 모듈 등록
SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperWrap = Style(APP_SKIN);
const MainSwiper = () => {
  const swiperRef = useRef(null); // Swiper 컴포넌트에 접근하기 위한 ref

  return (
    <SwiperWrap>
      <Swiper
        ref={swiperRef} // ref 속성 설정
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item">
            <Heading level={3} title={'Title'} />
            <Text text={'subTitle'} />
            <Button text={'버튼 텍스트'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Heading level={3} title={'Title'} />
            <Text text={'subTitle'} />
            <Button text={'버튼 텍스트'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Heading level={3} title={'Title'} />
            <Text text={'subTitle'} />
            <Button text={'버튼 텍스트'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Heading level={3} title={'Title'} />
            <Text text={'subTitle'} />
            <Button text={'버튼 텍스트'} />
          </div>
        </SwiperSlide>
      </Swiper>
    </SwiperWrap>
  );
};

export default MainSwiper;
