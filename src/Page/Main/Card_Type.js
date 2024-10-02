import React, { useState } from 'react';
import Style from './MainStyle';

import Text from '../../Components/Text/Text';
import Heading from '../../Components/Heading/Heading';

import ContentItem from '../../Components/ContentItem/ContentItem';
import TextBasic from '../../Components/CardCollection/TextBasic/TextBasic';
import ButtonLink from '../../Components/Button/ButtonLink';
import { IconLink, IconArrow } from '../../assets/images/common/IconSet';
import Button from '../../Components/Button/Button';

const MainWrap = Style(APP_SKIN);

// const CardData = [
//   {
//     id: 1,
//     title: 'text-basic',
//     subTitle: 'text-basic 선택',
//     text: 'Kia Digital Key(NFC)란 무엇인가요?.'
//   }
// ];

const PubMain = () => {
  return (
    <MainWrap>
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10 }}
      >
        <ContentItem>
          <Heading level={3} title={'Title'} size={'--font-size-4'} bold={'bold'} />
          <Text
            size={'--font-size-7'}
            color={'--Grey-Spectrum-Coll-Grey-40'}
            text={'Sub title(선택)'}
          />

          <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />

          <ButtonLink
            className={'btn text'}
            text={'Button'}
            // iconRight={<IconLink currentColor={'#05141F'} />}
            iconRight={<IconArrow width={12} height={12} currentColor={'#000'} />}
            size={'small'}
            link={'/'}
          />
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
          <ButtonLink
            className={'btn text'}
            text={'Button'}
            iconRight={<IconLink currentColor={'#05141F'} />}
            size={'small'}
            link={'/'}
          />
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
