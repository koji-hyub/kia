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

const swiperItem = [
  {
    id: 1,
    title: 'Title',
    text: 'subTitle (선택)',
    button: <Button className={'secondary'} size={'small'} text={'Button'} />
  },
  {
    id: 2,
    title: 'Title2',
    text: 'subTitle (선택)',
    button: (
      <>
        <Button className={'secondary'} size={'small'} text={'Button'} />
        <Button className={'secondary'} size={'small'} text={'Button'} />
      </>
    )
  },
  {
    id: 3,
    title: 'Title',
    text: 'subTitle (선택)',
    button: <Button className={'secondary'} size={'small'} text={'Button'} />
  },
  {
    id: 4,
    title: 'Title2',
    text: 'subTitle (선택)',
    button: (
      <>
        <Button className={'secondary'} size={'small'} text={'Button'} />
        <Button className={'secondary'} size={'small'} text={'Button'} />
      </>
    )
  }
];

const MainSwiper = () => {
  const swiperRef = useRef(null); // Swiper 컴포넌트에 접근하기 위한 ref

  return (
    <SwiperWrap>
      <Swiper
        navigation={true}
        ref={swiperRef} // ref 속성 설정
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={8}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swiperItem &&
          swiperItem.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className={'top'}>
                <Heading level={3} title={item.title} size={'--font-size-3'} bold={'bold'} />
              </div>
              <div className={'item'}>
                <Text
                  text={item.text}
                  size={'--font-size-7, 12px'}
                  color={'--Grey-Spectrum-Coll-Grey-40, #9BA2A9'}
                />
              </div>
              <div className={'btn-area'}>{item.button}</div>
            </SwiperSlide>
          ))}
      </Swiper>
    </SwiperWrap>
  );
};

export default MainSwiper;
