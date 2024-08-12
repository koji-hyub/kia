import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import { IconPlay, IconPaused, IconArrowType01 } from '~/assets/images/common/IconSet';
import Style from './MainSwiperStyle';

// SwiperCore에 필요한 모듈 등록
SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperWrap = Style(APP_SKIN);
const MainSwiper = () => {
  const [isPaused, setIsPaused] = useState(false); // 일시정지 상태를 관리하는 상태 변수
  const swiperRef = useRef(null); // Swiper 컴포넌트에 접근하기 위한 ref

  // 이전 슬라이드로 이동하는 함수
  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // 다음 슬라이드로 이동하는 함수
  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  // 일시정지 및 재생을 토글하는 함수
  const togglePause = () => {
    // const swiperInstance = swiperRef.current?.swiper; // Swiper 인스턴스 가져오기
    // console.log(swiperInstance, 'swiperInstance');
    if (swiperRef.current) {
      if (isPaused) {
        console.log('start');
        swiperRef.current.swiper.autoplay.start(); // 재생
      } else {
        // console.log('stop', swiperInstance.autoplay.stop());
        swiperRef.current.swiper.autoplay.stop(); // 일시정지
      }
      setIsPaused(!isPaused); // 상태 업데이트
    }
  };

  // 페이지 네이션
  const handleSlideChange = () => {
    if (swiperRef.current) {
      const currentPage = document.querySelector('.current-page');
      const swiper = swiperRef.current.swiper;
      currentPage.innerHTML = swiper.realIndex + 1 + '/' + swiper.slides.length;
    } else if (swiperRef.current == null) {
      return false;
    }
  };

  return (
    <SwiperWrap>
      <Swiper
        ref={swiperRef} // ref 속성 설정
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item">
            <div className="title">
              <strong> KIA 챗봇사이트</strong>에<br /> 오신 것을 환영합니다.
            </div>
            <p className="s-title">지금 바로 챗봇 서비스를 사용해보세요!</p>
            <Link
              className={'btn'}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span>
                챗봇 바로가기
                <IconArrowType01 />
              </span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div className="title">
              <strong> KIA 챗봇사이트</strong>에<br /> 오신 것을 환영합니다.
            </div>
            <p className="s-title">지금 바로 챗봇 서비스를 사용해보세요!</p>
            <Link
              className={'btn'}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span>
                챗봇 바로가기
                <IconArrowType01 />
              </span>
            </Link>
          </div>
        </SwiperSlide>

        <div className="remote">
          <div className="inner">
            <button className={'autoplay'} onClick={togglePause}>
              {isPaused ? <IconPlay /> : <IconPaused />}
            </button>
            <button className={'prev'} onClick={goToPrevSlide}>
              <IconArrowType01 />
            </button>
            <div className="current-page">{handleSlideChange()}</div>
            <button className={'next'} onClick={goToNextSlide}>
              <IconArrowType01 />
            </button>
          </div>
        </div>
      </Swiper>
    </SwiperWrap>
  );
};

export default MainSwiper;
