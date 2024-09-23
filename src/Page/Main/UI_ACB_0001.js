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
import ButtonIcon from '../../Components/Button/ButtonIcon';
import { IconRefresh } from '../../assets/images/common/IconSet';
// import MessageInput from '../../Components/MessageInput/MessageInput';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  // 최초 튤팁 실행
  const [userTooltip, setUserTooltip] = useState(true);
  const [agentTooltip, setAgentTooltip] = useState(true);

  return (
    <MainWrap>
      <WelcomeKia />
      <MainSwiper />
      <ChatBot
        agentTooltip={agentTooltip}
        setAgentTooltip={setAgentTooltip}
        text={'약관에 동의하지 않았습니다.<br />진행 중인 대화는 여기서 마치겠습니다.'}
      />
      <ChatBot text={'약관에 동의하지 않았습니다.'} />
      <ChatBot text={'약관에 동의하지 않았습니다.<br />진행 중인 대화는 여기서 마치겠습니다.'} />
      <MainSwiper />
      <ChatBot>
        <ContentItem className={'content-item'}>
          <Text text={'어어어어엉'} />
        </ContentItem>
      </ChatBot>
      <LoadingText />
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
