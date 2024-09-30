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
import ButtonIcon from '../../Components/Button/ButtonIcon';
import { IconArrow, IconLink, IconRefresh } from '../../assets/images/common/IconSet';
import DateTime from '../../Components/DateTime/DateTime';
import ButtonLink from '../../Components/Button/ButtonLink';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  // 최초 튤팁 실행
  const [userTooltip, setUserTooltip] = useState(true);
  const [agentTooltip, setAgentTooltip] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const [agentName, setAgentName] = useState('김기아');
  const [modifyBtn, setModifyBtn] = useState(true);

  const name = '김기아';
  return (
    <MainWrap>
      <ChatBot text={'소중한 정보 입력 감사합니다.'} refresh={refresh} />
      <ChatBot
        text={
          '채팅 상담 요청이 정상적으로 접수 되었습니다. 현재 대기 인원수는 1명입니다. 답변 재생성 요청'
        }
        refresh={refresh}
      />
      <DateTime />
      <ChangeText text={'상담사 채팅을 시작합니다.'} />
      <LoadingText />
      <Agent text={`새로운 생각의 시작 기아상담사 ${name}입니다. <br/> 무엇을 도와드릴까요?`} />
      <User text={'시승 문의 하려고 합니다.'} />
    </MainWrap>
  );
};

export default PubMain;
