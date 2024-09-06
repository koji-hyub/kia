import React, { useState, useEffect, useRef } from 'react';
import Style from './PopupStyle';
import { IconClosed } from '../../assets/images/common/IconSet';
import Heading from '../Heading/Heading';

const Popup = Style(APP_SKIN);

function PopupWrap({ onClick, title, content, size, footer, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isPopRef = useRef();

  useEffect(() => {
    setIsOpen(true); // 팝업이 열릴 때

    // 애니메이션 상태를 관리
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300); // 애니메이션 지속 시간
      return () => clearTimeout(timer);
    }

    // 스크롤 방지
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const popup = isPopRef.current;
    if (!popup) return;

    // 포커스 가능한 요소들 찾기
    const focusableElements = popup.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([tabindex="-1"]), *[contenteditable]'
    );

    if (focusableElements.length === 0) return;

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab: 역방향 이동
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          // Tab: 순방향 이동
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    // 팝업 열렸을 때 첫 번째 포커스 가능한 요소로 포커스 이동
    firstFocusableElement?.focus();

    // 포커스 트랩을 위한 이벤트 핸들러 등록
    document.addEventListener('keydown', handleTabKey);

    return () => {
      // cleanup
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    onClick && onClick(); // 부모에서 전달된 onClick 호출
  };

  if (!isAnimating && !isOpen) return null;

  return (
    <Popup
      ref={isPopRef}
      className={`${isOpen ? 'isActive' : 'isClosing'} ${size ? size : ''} ${
        className ? className : 'center'
      }`}
    >
      <div className={`pop-wrap ${size ? size : ''} ${className ? className : 'center'}`}>
        <div className="top-area">
          <div className="inner">
            <div className={'tit'}>
              <Heading title={title} level={4} />
            </div>
            <button className={'btn-closed'} onClick={handleClose}>
              <IconClosed />
              <span className={'blind'}>닫기</span>
            </button>
          </div>
        </div>
        <div className="middle-area">
          <div className="inner">{content}</div>
        </div>
        {footer && footer}
      </div>
    </Popup>
  );
}

export default PopupWrap;
