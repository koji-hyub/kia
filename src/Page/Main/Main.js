import React, { useEffect, useState, useRef } from 'react';
import Style from './MainStyle';
import Assistant from '~/Components/Assistant/Assistant';
import User from '../../Components/User/User';
import WelcomeKia from '../../Components/WelcomeKia/WelcomeKia';
import Evaluate from '../../Components/Evaluate/Evaluate';
import Button from '../../Components/Button/Button';
import Modal from '../../Components/Popup/Modal';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import Time from '../../Components/Time/Time';
import ContentItem from '../../Components/ContentItem/ContentItem';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  return (
    <MainWrap>
      <WelcomeKia />
      <MainSwiper />
      <ContentItem />
      <Assistant />
      <User />
      <Evaluate />
      <Time />

      {/*모달 팝업 샘플 테스트 */}
    </MainWrap>
  );
};

export default PubMain;
