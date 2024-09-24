import React, { useEffect, useState, useRef } from 'react';
import Style from './MainStyle';
import User from '../../Components/User/User';
import WelcomeKia from '../../Components/WelcomeKia/WelcomeKia';
import Evaluate from '../../Components/Evaluate/Evaluate';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import Time from '../../Components/DateTime/DateTime';
import Agent from '../../Components/Agent/Agent';
import Text from '../../Components/Text/Text';
import ChangeText from '../../Components/ChangeText/ChangeText';
import ChatBot from '../../Components/ChatBot/ChatBot';
import Button from '../../Components/Button/Button';
import EvaluateHalf from '../../Components/Evaluate/EvaluateHalf';
import LoadingText from '../../Components/Loading/LoadingText';
import ContentItem from '../../Components/ContentItem/ContentItem';
import Heading from '../../Components/Heading/Heading';
import DateTime from '../../Components/DateTime/DateTime';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  // 최초 튤팁 실행
  const [userTooltip, setUserTooltip] = useState(true);

  return (
    <MainWrap>
      <WelcomeKia />
      <MainSwiper />
      {/*<ChatBot />*/}
      {/*<Agent />*/}
      {/*<User userTooltip={userTooltip} setUserTooltip={setUserTooltip} text={'텍스트입니다.'} />*/}
      {/*<User text={'메세지 텍스트 입니다.'} />*/}
      {/*<Agent>*/}
      {/*  <Text />*/}
      {/*  <MainSwiper />*/}
      {/*  <Time />*/}
      {/*  */}
      {/*</Agent>*/}
      <ChangeText />
      <DateTime />
      {/*<ContentItem>*/}
      {/*  <EvaluateHalf />*/}
      {/*</ContentItem>*/}
      {/*<ContentItem>*/}
      {/*  <Heading level={3} size={'--font-size-4'} title={'Title'} />*/}
      {/*  <EvaluateHalf />*/}
      {/*</ContentItem>*/}
      {/*<User />*/}
      {/*모달 팝업 샘플 테스트 */}
    </MainWrap>
  );
};

export default PubMain;
