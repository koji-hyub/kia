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
import Input from '../../Components/Input/Input';
// import MessageInput from '../../Components/MessageInput/MessageInput';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  // 최초 튤팁 실행
  const [userTooltip, setUserTooltip] = useState(true);
  const [agentTooltip, setAgentTooltip] = useState(true);
  const [refresh, setRefresh] = useState(true);

  return (
    <MainWrap>
      <WelcomeKia />
      <MainSwiper />
      <ChatBot
        refresh={refresh}
        agentTooltip={agentTooltip}
        setAgentTooltip={setAgentTooltip}
        text={'약관에 동의하지 않았습니다.<br />진행 중인 대화는 여기서 마치겠습니다.'}
      />
      <Input
        label="Search"
        id="search"
        name="search"
        type="text"
        required={true}
        className="search"
        placeholder="Search something..."
        iconSearchText="🔍"
      />
      <ChatBot text={'약관에 동의하지 않았습니다.'} />
      <ChatBot text={'약관에 동의하지 않았습니다.<br />진행 중인 대화는 여기서 마치겠습니다.'} />
      <MainSwiper />
      <ChatBot>
        <ContentItem>
          <Heading level={3} title={'약관 동의'} size={'--font-size-4'} bold={'bold'} />
          <Text
            size={'--font-size-7'}
            color={'--Grey-Spectrum-Coll-Grey-40'}
            text={
              '세션이 종료되었습니다. <br /> 다시 로그인 하시어 챗봇 서비스를 이용하시기 바랍니다.'
            }
          />
          <ButtonLink
            className={'btn text'}
            text={'약관 보기'}
            iconRight={<IconLink currentColor={'#05141F'} />}
            size={'small'}
            link={'/'}
          />
          <div className={'btn-area'}>
            <Button text={'취소'} className={'btn secondary'} size={'small'} />
            <ButtonLink
              className={'btn primary'}
              text={'로그인 하기'}
              iconRight={<IconLink currentColor={'#fff'} />}
              size={'small'}
              link={'/'}
            />
          </div>
        </ContentItem>
      </ChatBot>
      <LoadingText />
      {/*<DateTime />*/}
      <ChangeText text={'챗봇 상담이 종료되었습니다.'} />
      {/*<Agent />*/}
      {/*<User*/}
      {/*  userTooltip={userTooltip}*/}
      {/*  setUserTooltip={setUserTooltip}*/}
      {/*  text={'챗봇 답변 메세지가 들어갑니다.'}*/}
      {/*/>*/}
      {/*<User text={'메세지 텍스트 입니다.'} />*/}
      {/*/!*<User />*!/*/}
      {/*/!*모달 팝업 샘플 테스트 *!/*/}
    </MainWrap>
  );
};

export default PubMain;
