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
import LoadingText from '../../Components/Loading/LoadingText';
import ContentItem from '../../Components/ContentItem/ContentItem';
import Heading from '../../Components/Heading/Heading';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  // 최초 튤팁 실행
  const [userTooltip, setUserTooltip] = useState(true);

  return (
    <MainWrap>
      <WelcomeKia />
      <MainSwiper />
      <ChatBot>
        <Text className={'text'} text={'궁금하신 사항을 상단의 메뉴에서 선택하세요.'} />
      </ChatBot>
      <ChatBot>
        <Text className={'text'} text={'상담 종료 1분 전 입니다.'} />
      </ChatBot>
      <ChatBot>
        <Text className={'text'} text={'답변이 없으실 경우 상담이 종료됩니다.'} />
      </ChatBot>

      <ChatBot>
        <ContentItem className={'content-item'}>
          <Text text={'어어어어엉'} />
        </ContentItem>
      </ChatBot>

      <ChangeText text={'챗봇 상담이 종료되었습니다.'} />
      <Agent />
      <User
        userTooltip={userTooltip}
        setUserTooltip={setUserTooltip}
        text={'챗봇 답변 메세지가 들어갑니다.'}
      />
      <User text={'메세지 텍스트 입니다.'} />

      {/*<User />*/}
      {/*모달 팝업 샘플 테스트 */}
    </MainWrap>
  );
};

export default PubMain;
