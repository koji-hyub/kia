import React from 'react';
import Lottie from 'lottie-react';
// import animationData from '../../assets/lottie/welcomekia.json';
import Style from './WelecomeKiaStyle';
import Text from '../Text/Text';

import WelecomeKiaImg from '../../assets/images/common/WelcomeKia.gif';

const WelecomeKia = Style(APP_SKIN);

const userName = '김기아';

function LottieAnimation() {
  return (
    <>
      <WelecomeKia>
        <div className={'lottie-wrap'}>
          <img src={WelecomeKiaImg} alt="" />
          <span className={'blind'}>KIA AI Assistant</span>
        </div>

        <Text
          className={'welcome-text'}
          size={'--font-size-3'}
          color={'--Grey-Spectrum-Coll-Grey-40'}
          text={`${userName} 님, 안녕하세요. \n 기아 챗봇입니다. `}
        />
        <Text
          className={'small-text'}
          size={'--font-size-3'}
          color={'--Grey-Spectrum-Coll-Grey-40'}
          align={'center'}
          text={'어떤 업무가 궁금하신가요?'}
        />
      </WelecomeKia>
    </>
  );
}

export default LottieAnimation;
