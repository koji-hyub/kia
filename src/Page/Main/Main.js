import React, { useEffect, useState, useRef } from 'react';
import Style from './MainStyle';
import User from '../../Components/User/User';
import WelcomeKia from '../../Components/WelcomeKia/WelcomeKia';
import Evaluate from '../../Components/Evaluate/Evaluate';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import Time from '../../Components/Time/Time';
import Agent from '../../Components/Agent/Agent';
import Text from '../../Components/Text/Text';
import ChangeText from '../../Components/ChangeText/ChangeText';
import ChatBot from '../../Components/ChatBot/ChatBot';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  return (
    <MainWrap>
      <WelcomeKia />
      <ChatBot />
      <Agent>
        <Text />
        <MainSwiper />
        <Time />
        <ChangeText />
      </Agent>

      <User />
      <Evaluate />

      {/*모달 팝업 샘플 테스트 */}
    </MainWrap>
  );
};

export default PubMain;
