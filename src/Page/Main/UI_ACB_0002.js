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

  return (
    <MainWrap>
      <User userTooltip={userTooltip} setUserTooltip={setUserTooltip} text={'상담사 채팅'} />
      <ChatBot>
        <ContentItem>
          <Heading level={3} title={'약관 동의'} size={'--font-size-4'} bold={'bold'} />
          <Text
            size={'--font-size-7'}
            color={'--Grey-Spectrum-Coll-Grey-40'}
            text={
              '상담사 채팅은 약관 동의 후 서비스 이용이 가능합니다. 개인정보 수집 이용 약관을 확인하고, 동의해 주세요.'
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
            <Button text={'미동의'} className={'btn secondary'} size={'small'} />
            <Button text={'동의'} className={'btn primary'} size={'small'} />
            {/*<ButtonLink*/}
            {/*  className={'btn primary'}*/}
            {/*  text={'로그인 하기'}*/}
            {/*  iconRight={<IconLink currentColor={'#fff'} />}*/}
            {/*  size={'small'}*/}
            {/*  link={'/'}*/}
            {/*/>*/}
          </div>
        </ContentItem>
      </ChatBot>

      <ChatBot
        refresh={refresh}
        // agentTooltip={agentTooltip}
        // setAgentTooltip={setAgentTooltip}
        text={'약관에 동의하지 않았습니다.<br />진행 중인 대화는 여기서 마치겠습니다.'}
      />
      <ChatBot>
        <ContentItem>
          {/*<Heading level={3} title={'약관 동의'} size={'--font-size-4'} bold={'bold'} />*/}
          <Text
            size={'--font-size-7'}
            text={
              '상담사 채팅은 기아자동차 회원만 이용 가능한 서비스 입니다. 회원이신 경우, 아래 버튼을 선택하시어 로그인을 해주세요. 취소 로그인 하기'
            }
            color={'--Grey-Spectrum-Coll-Grey-40'}
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
      <ChatBot text={'로그인을 취소합니다.'} refresh={refresh} />
      <ChatBot text={'로그인 되었습니다.'} refresh={refresh} />
      <DateTime />
      <ChangeText text={'상담 채팅을 시작합니다.'} />

      <LoadingText />

      <Agent
        text={`새로운 생각의 시작 기아상담사 ${agentName}입니다. 무엇을 도와드릴까요. 무엇을 도와드릴까요. 무엇을 도와드릴까요. 무엇을 도와드릴까요. 무엇을 도와드릴까요. 무엇을 도와드릴까요. 무엇을 도와드릴까요. 무엇을 도와드릴까요. 무엇을 도와드릴까요?`}
      />

      <User text={'시승 문의 하려고 합니다.'} />
      {/*/!*<User />*!/*/}
      {/*/!*모달 팝업 샘플 테스트 *!/*/}
    </MainWrap>
  );
};

export default PubMain;
