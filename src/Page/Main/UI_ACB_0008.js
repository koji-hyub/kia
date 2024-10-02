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

  return (
    <MainWrap>
      <MainSwiper />
      <ChatBot
        refresh={refresh}
        agentTooltip={agentTooltip}
        setAgentTooltip={setAgentTooltip}
        text={'챗봇 상담을 종료합니다.'}
      />

      <ChangeText text={'챗봇 상담을 종료합니다.'} />
    </MainWrap>
  );
};

export default PubMain;
