import React from 'react';
import Style from './WelcomeKiaStyle';
import Text from '../Text/Text';

import WelecomeKiaImg from '../../assets/images/common/WelcomeKia.gif';

const WelcomeKia = Style(APP_SKIN);

const userName = '김기아';

function LottieAnimation() {
  return (
    <>
      <WelcomeKia>
        <div className={'img-box'}>
          <img src={WelecomeKiaImg} alt="" />
          <span className={'blind'}>KIA AI Assistant</span>
        </div>

        <Text
          className={'welcome-text'}
          size={'--font-size-3'}
          color={'--Primary-Midnight-Black'}
          bold={'bold'}
          // text={`${userName} 님, 안녕하세요. \n 기아 챗봇입니다. `}
          text={`안녕하세요, \n 무엇을 도와드릴까요?`}
        />
        {/*<Text*/}
        {/*  className={'small-text'}*/}
        {/*  size={'--font-size-5'}*/}
        {/*  color={'--Grey-Spectrum-Coll-Grey-40'}*/}
        {/*  align={'center'}*/}
        {/*  text={'어떤 업무가 궁금하신가요?'}*/}
        {/*/>*/}
      </WelcomeKia>
    </>
  );
}

export default LottieAnimation;
