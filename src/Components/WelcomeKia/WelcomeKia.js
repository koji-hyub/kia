import React from 'react';
import Style from './WelcomeKiaStyle';

import KiaImg from '../../assets/images/common/WelcomeKia.gif';

const WelcomeKia = Style(APP_SKIN);

const userName = '김기아';

function LottieAnimation() {
  return (
    <WelcomeKia>
      <div className={'img-box'}>
        <img src={KiaImg} alt="" />
        <span className={'blind'}>KIA AI Assistant</span>
      </div>
      <div className={'welcome-text'}>
        <strong>
          안녕하세요 <br />
          무엇을 도와드릴까요?
        </strong>
      </div>
    </WelcomeKia>
  );
}

export default LottieAnimation;
