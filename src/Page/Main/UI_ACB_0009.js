import React, { useState } from 'react';
import Style from './MainStyle';
import User from '../../Components/User/User';
import ChatBot from '../../Components/ChatBot/ChatBot';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import Text from '../../Components/Text/Text';
import Heading from '../../Components/Heading/Heading';
import Button from '../../Components/Button/Button';
import { IconArrow } from '../../assets/images/common/IconSet';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import DateTime from '../../Components/DateTime/DateTime';
import ChangeText from '../../Components/ChangeText/ChangeText';
import LoadingText from '../../Components/Loading/LoadingText';
import Agent from '../../Components/Agent/Agent';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  // 최초 튤팁 실행
  const [userTooltip, setUserTooltip] = useState(true);
  const [agentTooltip, setAgentTooltip] = useState(true);
  const [modifyBtn, setModifyBtn] = useState(true);
  const [refresh, setRefresh] = useState(true);

  return (
    <MainWrap>
      <ChatBot
        text={'고객 정보 입력을 취소합니다. '}
        refresh={refresh}
        agentTooltip={agentTooltip}
        setAgentTooltip={setAgentTooltip}
      />
      <ChatBot text={'소중한 정보 입력 감사합니다.'} refresh={refresh} />
      <ChatBot
        text={'채팅 상담 요청이 정상적으로 접수 되었습니다. 현재 대기 인원수는 1명입니다.'}
        refresh={refresh}
      />
      <DateTime />
      <ChangeText text={'상담사 채팅을 시작합니다.'} />
      <LoadingText />
      <Agent text={'새로운 생각의 시작 기아상담사 ㅇㅇㅇ입니다. <br/> 무엇을 도와드릴까요?'} />
      <User text={'시승 문의 하려고 합니다.'} modifyBtn={modifyBtn} />
      <ChangeText text={'상담사 채팅을 시작합니다.'} />
      <DateTime />
    </MainWrap>
  );
};

export default PubMain;
