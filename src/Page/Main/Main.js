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
import Button from '../../Components/Button/Button';
import EvaluateHalf from '../../Components/Evaluate/EvaluateHalf';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  return (
    <MainWrap>
      <WelcomeKia />
      <ChatBot />

      <EvaluateHalf />
      <Button
      // disabled={true}
      // className={'small'}
      // text={'버튼'}
      />
      <Button
        className={'secondary'}
        size={'small'}
        // disabled={true}
        // text={'버튼'}
      />
      <Button
        className={'tertiary'}
        size={'small'}
        // disabled={true}
        // text={'버튼'}
      />
      <Button
        className={'text'}
        // size={'small'}
        // disabled={true}
        // text={'버튼'}
      />

      {/*<Agent>*/}
      {/*  <Text />*/}
      {/*  <MainSwiper />*/}
      {/*  <Time />*/}
      {/*  <ChangeText />*/}
      {/*</Agent>*/}

      {/*<User />*/}
      {/*<Evaluate />*/}

      {/*모달 팝업 샘플 테스트 */}
    </MainWrap>
  );
};

export default PubMain;
