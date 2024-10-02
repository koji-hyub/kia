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
import ListItem from '../../Components/ListItem/ListItem';
import ListItemLink from '../../Components/ListItem/ListItemLink';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  const [userTooltip, setUserTooltip] = useState(true);
  const [agentTooltip, setAgentTooltip] = useState(true);
  const [modifyBtn, setModifyBtn] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const QuickRepliesItem = [
    { id: 1, link: '/', tag: '내 포인트 조회' },
    { id: 2, link: '/', tag: '포인트 사용 내역' },
    { id: 3, link: '/', tag: '포인트 사용 내역' },
    { id: 4, link: '/', tag: '포인트 사용 내역' },
    { id: 5, link: '/', tag: '법인 회원 포인트 사용' }
  ];
  const ListData = [
    { id: 1, label: '내 포인트 조회', value: '$적립예정포인트$ P' },
    { id: 2, label: 'Label', value: 'value P' },
    { id: 3, label: '총 적립', value: '$총적립포인트$ P' },
    { id: 4, label: '총 사용', value: '$총적립포인트$ P' },
    { id: 5, label: '소멸 예정', value: '$소멸예정포인트$ P' }
  ];
  const LinkData = [
    { id: 1, label: '$내역$', value: '+$사용포인트$', txt: '$사용일$·$사용구분$' },
    { id: 2, label: '$내역$', value: '+$사용포인트$', txt: '$사용일$·$사용구분$' },
    { id: 3, label: '$내역$', value: '+$사용포인트$', txt: '$사용일$·$사용구분$' }
  ];
  const LinkData2 = [
    { id: 1, label: '$내역$', txt: '$사용일$·$사용구분$' },
    { id: 2, label: '$내역$', txt: '$사용일$·$사용구분$' },
    { id: 3, label: '$내역$', txt: '$사용일$·$사용구분$' }
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
            bold={'bold'}
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
      <ChatBot
        refresh={refresh}
        text={'$고객명$ 고객님의 기아멤버스 잔여 포인트 내역을 안내해드릴게요.'}
      >
        <ContentItem>
          <Heading
            level={4}
            color={'--Primary-Midnight-Black'}
            size={'--font-size-4'}
            bold={'bold'}
            title={'기아멤버스 포인트'}
          />

          <ListItem data={ListData} />

          <div className={'btn-area'}>
            <ButtonLink
              className={'btn primary'}
              text={'포인트 가맹점 조회'}
              iconRight={<IconLink currentColor={'#fff'} />}
              size={'small'}
              link={'/'}
            />
          </div>
          <div className={'btn-area'}>
            {/*<Button text={'취소'} className={'btn secondary'} size={'small'} />*/}
            <ButtonLink
              className={'btn secondary'}
              text={'포인트 사용 내역'}
              // iconRight={<IconLink currentColor={'#05141F'} />}
              size={'small'}
              link={'/'}
            />
          </div>
          <div className={'btn-area'}>
            {/*<Button text={'취소'} className={'btn secondary'} size={'small'} />*/}
            <ButtonLink
              className={'btn secondary'}
              text={'포인트 양도'}
              // iconRight={<IconLink currentColor={'#05141F'} />}
              size={'small'}
              link={'/'}
            />
          </div>
        </ContentItem>
      </ChatBot>
      <ChatBot
        refresh={refresh}
        text={'$고객명$ 고객님의 최근 6개월 내 포인트 사용 및 적립 내역을 안내해 드릴게요.'}
      >
        <ContentItem>
          <Heading
            level={4}
            color={'--Primary-Midnight-Black'}
            size={'--font-size-4'}
            bold={'bold'}
            title={'포인트 사용내역'}
          />

          <ListItemLink data={LinkData} />

          <div className={'btn-area'}>
            <ButtonLink
              className={'btn primary'}
              text={'포인트 사용내역 전체 조회'}
              iconRight={<IconLink currentColor={'#fff'} />}
              size={'small'}
              link={'/'}
            />
          </div>
          <div className={'btn-area'}>
            <ButtonLink
              className={'btn secondary'}
              text={'잔여 포인트 조회'}
              size={'small'}
              link={'/'}
            />
          </div>
        </ContentItem>
      </ChatBot>
      <ChatBot refresh={refresh} text={'조회하시고자 하는 계약 내역을 아래에서 선택해 주세요.'}>
        <ContentItem>
          <Heading
            level={4}
            color={'--Primary-Midnight-Black'}
            size={'--font-size-4'}
            bold={'bold'}
            title={'차량 계약 목록'}
          />

          <ListItemLink data={LinkData2} />

          <div className={'btn-area'}>
            <ButtonLink
              className={'btn secondary'}
              text={'차량 계약 내역 전체 조회'}
              iconRight={<IconLink currentColor={'#fff'} />}
              size={'small'}
              link={'/'}
            />
          </div>
        </ContentItem>
      </ChatBot>
      <ChatBot refresh={refresh} text={'조회하시고자 하는 계약 내역을 아래에서 선택해 주세요.'}>
        <div className={'replies-item'}>
          {QuickRepliesItem.map((item, index) => (
            <QuickReplies key={item.id} tag={item.tag} link={item.link} />
          ))}
        </div>
      </ChatBot>
    </MainWrap>
  );
};

export default PubMain;
