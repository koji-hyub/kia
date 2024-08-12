import React, { useEffect } from 'react';
import Style from './MainStyle';
import Assistant from '~/Components/Assistant/Assistant';
import User from '../../Components/User/User';
// import WelecomeKia from '../../Components/WelecomeKia/WelecomeKia';
import VideoPlayer from '../../Components/WelecomeKia/WelecomeKia';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  // useEffect(() => {
  //   const main = document.querySelector('.main');
  //   const body = main.closest('body');
  //
  //   const headerWrap = body.querySelector('.header-wrap');
  //   const footerWrap = body.querySelector('.footer-wrap');
  //
  //   if (headerWrap && footerWrap) {
  //     const maxHeight = headerWrap.clientHeight + footerWrap.clientHeight;
  //     console.log(footerWrap.clientHeight, 'footerWrap');
  //
  //     main.style.height = `calc(100% - ${maxHeight}px)`;
  //   }
  // }, []);

  return (
    <>
      <MainWrap className={'main'}>
        <VideoPlayer />
        <Assistant />
        <User />
      </MainWrap>
    </>
  );
};

export default PubMain;
