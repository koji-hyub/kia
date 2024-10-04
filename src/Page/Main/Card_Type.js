import React, { useState } from 'react';
import Style from './MainStyle';

import Text from '../../Components/Text/Text';
import Heading from '../../Components/Heading/Heading';
import ContentItem from '../../Components/ContentItem/ContentItem';
import ButtonLink from '../../Components/Button/ButtonLink';
import { IconArrow } from '../../assets/images/common/IconSet';
import Button from '../../Components/Button/Button';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ImageBox from '../../Components/ImageBox/ImageBox';

const MainWrap = Style(APP_SKIN);

import WelcomeKia from '../../Components/WelcomeKia/WelcomeKia';
import KiaImg from '../../assets/images/common/WelcomeKia.gif';
import ListItem from '../../Components/ListItem/ListItem';
import Result from '../../Components/Result/Result';
import InfoBox from '../../Components/InfoBox/InfoBox';
import DotItem from '../../Components/DotItem/DotItem';
const ListData = [
  { id: 1, label: 'Label', value: 'value' },
  { id: 2, label: 'Label', value: 'value ' }
];
const DotData = [
  { id: 1, text: 'contents' },
  { id: 2, text: 'contents' }
];
const PubMain = () => {
  return (
    <MainWrap>
      {/* 케러셀 스와이퍼 모음 */}
      <Heading level={2} title={'슬라이드 아이템'} />
      <MainSwiper>
        <SwiperSlide>
          <Heading level={3} title={'Title'} size={'--font-size-4'} bold={'bold'} />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <div className={'content-text'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Heading
            chip={'chip 선택'}
            level={3}
            title={'Title'}
            size={'--font-size-4'}
            bold={'bold'}
          />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <ImageBox img={''} />
          <div className={'content-text'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <ImageBox img={''} />
          <Heading
            chip={'chip 선택'}
            level={3}
            title={'Title'}
            size={'--font-size-4'}
            bold={'bold'}
          />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <div className={'content-text'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </SwiperSlide>
      </MainSwiper>

      {/*카드 아이템 모음 Type01 */}
      <Heading level={2} title={'카드형 아이템 박스'} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 10,
          flexWrap: 'wrap'
        }}
      >
        <ContentItem>
          <Heading level={3} title={'Title'} size={'--font-size-4'} bold={'bold'} />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <div className={'content-text'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
          <DotItem />

          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </ContentItem>
        <ContentItem>
          <Heading level={3} title={'Title'} size={'--font-size-4'} bold={'bold'} />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </ContentItem>
        <ContentItem>
          <Heading level={3} title={'Title'} size={'--font-size-4'} bold={'bold'} />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <div className={'btn-area'}>
            <ButtonLink
              className={'btn text'}
              text={'Button'}
              // iconRight={<IconLink currentColor={'#05141F'} />}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              size={'small'}
              link={'/'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </ContentItem>
        <ContentItem>
          <Heading level={3} title={'Title'} size={'--font-size-4'} bold={'bold'} />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <ListItem data={ListData} />
          <Result text={'value'} />
          <InfoBox />
        </ContentItem>
        <ContentItem>
          <Heading
            chip={'chip 선택'}
            level={3}
            title={'Title'}
            size={'--font-size-4'}
            bold={'bold'}
          />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <ImageBox img={''} />
          <div className={'content-text'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </ContentItem>
        <ContentItem>
          <ImageBox img={''} />
          <Heading
            chip={'chip 선택'}
            level={3}
            title={'Title'}
            size={'--font-size-4'}
            bold={'bold'}
          />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>
          <div className={'content-text'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </ContentItem>
        <ContentItem>
          <ImageBox img={''} />
          <Heading
            chip={'chip 선택'}
            level={3}
            title={'Title'}
            size={'--font-size-4'}
            bold={'bold'}
          />
          <div className={'sub-text'}>
            <Text
              size={'--font-size-7'}
              color={'--Grey-Spectrum-Coll-Grey-40'}
              text={'Sub title(선택)'}
            />
          </div>

          <div className={'content-text'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
          <DotItem data={DotData} />
          <div className={'btn-area'}>
            <Button
              text={'Button'}
              iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
              className={'btn secondary'}
              size={'small'}
            />
          </div>
        </ContentItem>
      </div>
    </MainWrap>
  );
};

export default PubMain;
