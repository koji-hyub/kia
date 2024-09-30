import React, { useState } from 'react';
import Style from './MainStyle';
import User from '../../Components/User/User';
import ChatBot from '../../Components/ChatBot/ChatBot';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import Text from '../../Components/Text/Text';
import Heading from '../../Components/Heading/Heading';
import Button from '../../Components/Button/Button';
import { IconArrow, IconLink } from '../../assets/images/common/IconSet';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import ContentItem from '../../Components/ContentItem/ContentItem';
import ButtonLink from '../../Components/Button/ButtonLink';
import QuickReplies from '../../Components/QuickReplies/QuickReplies';
import ImageBox from '../../Components/ImageBox/ImageBox';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  const [userTooltip, setUserTooltip] = useState(true);
  const [agentTooltip, setAgentTooltip] = useState(true);
  const [modifyBtn, setModifyBtn] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const QuickRepliesItem = [
    { id: 1, link: '/', tag: '내 포인트 조회' },
    { id: 2, link: '/', tag: '포인트 사용 내역' },
    { id: 3, link: '/', tag: '법인 회원 포인트 사용' }
  ];
  return (
    <MainWrap>
      <ChatBot
        refresh={refresh}
        agentTooltip={agentTooltip}
        setAgentTooltip={setAgentTooltip}
        text={'약관에 동의하지 않았습니다.<br />진행 중인 대화는 여기서 마치겠습니다.'}
      >
        <ContentItem>
          <Text
            text={'가맹점 확인'}
            size={'--font-size-7'}
            color={'--Grey-Spectrum-Coll-Grey-40'}
          />
          <div className={'btn-area'}>
            {/*<Button text={'취소'} className={'btn secondary'} size={'small'} />*/}
            <ButtonLink
              className={'btn primary'}
              text={'로그인 하기'}
              iconRight={<IconLink currentColor={'#fff'} />}
              size={'small'}
              link={'/'}
            />
          </div>
        </ContentItem>
        <div className={'replies-item'}>
          {QuickRepliesItem.map((item, index) => (
            <QuickReplies key={item.id} tag={item.tag} link={item.link} />
          ))}
        </div>
      </ChatBot>

      <ChatBot refresh={refresh} text={'기아의 차량을 소개해드릴께요!'}>
        <ContentItem>
          <ImageBox />
          <Heading
            level={4}
            color={'--Primary-Midnight-Black'}
            size={'--font-size-4'}
            title={'$차종$'}
          />
          <Text
            text={'$최소금액$ 원~'}
            size={'--font-size-7'}
            color={'--Grey-Spectrum-Coll-Grey-40'}
          />
          <div className={'btn-area'}>
            <ButtonLink
              className={'btn primary'}
              text={'로그인 하기'}
              iconRight={<IconLink currentColor={'#fff'} />}
              size={'small'}
              link={'/'}
            />
          </div>
          <div className={'btn-area'}>
            {/*<Button text={'취소'} className={'btn secondary'} size={'small'} />*/}
            <ButtonLink
              className={'btn secondary'}
              text={'견적 내기'}
              iconRight={<IconLink currentColor={'#05141F'} />}
              size={'small'}
              link={'/'}
            />
          </div>
          <div className={'btn-area'}>
            {/*<Button text={'취소'} className={'btn secondary'} size={'small'} />*/}
            <ButtonLink
              className={'btn secondary'}
              text={'카탈로그 다운로드'}
              iconRight={<IconLink currentColor={'#05141F'} />}
              size={'small'}
              link={'/'}
            />
          </div>
        </ContentItem>
      </ChatBot>
    </MainWrap>
  );
};

export default PubMain;
