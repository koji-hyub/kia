import React, { useEffect, useRef, useState } from 'react';
import Style from './PopupStyle';
import { IconClosed } from '../../assets/images/common/IconSet';
import Heading from '../Heading/Heading';

const Popup = Style(APP_SKIN);

function PopupWrap({ onClick, title, content, size, footer, className }) {
  const isPopRef = useRef();
  // 선택된 컴포넌트
  // 팝업 관련
  useEffect(() => {
    const body = document.body;

    const top = document.querySelector('.pop-wrap .top');
    const topHeight = top.clientHeight;

    const footer = document.querySelector('.pop-wrap .footer');

    const content = document.querySelector('.pop-wrap .content');

    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = '';
    };
  }, []);

  return (
    <Popup>
      <div className={`pop-wrap ${size && size} ${className && className}`}>
        <div className="top">
          <div className="inner">
            <div className={'tit'}>
              <Heading title={title} level={4} />
            </div>
            <button className={'btn-closed'} onClick={onClick}>
              <IconClosed />
              <span className={'blind'}>닫기</span>
            </button>
          </div>
        </div>
        <div className="content">
          <div className="inner">{content}</div>
        </div>
        {footer && footer}
      </div>
    </Popup>
  );
}

export default PopupWrap;
