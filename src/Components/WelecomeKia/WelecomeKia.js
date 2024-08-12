import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/welcomekia.json';
import Style from './WelecomeKiaStyle';
import Text from '../Text/Text';

const WelecomeKia = Style(APP_SKIN);

const userName = '김기아';

function LottieAnimation() {
  return (
    <>
      <WelecomeKia>
        <div className={'lottie-wrap'}>
          <Lottie className={'lottie'} animationData={animationData} loop={false} autoplay={true} />
          <span className={'blind'}>KIA AI Assistant</span>
        </div>

        <Text
          className={'welcome-text'}
          text={`${userName} 님, 안녕하세요. \n 기아 챗봇입니다. `}
        />
        <Text
          className={'small-text'}
          size={'medium'}
          color={'color03'}
          align={'center'}
          text={'어떤 업무가 궁금하신가요?'}
        />
      </WelecomeKia>
    </>
  );
}

export default LottieAnimation;
