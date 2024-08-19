import React, { useState } from 'react';
import Style from './MessageStyle';
import MessageInput from '~/Components/MessageInput/MessageInput';
import HamburgerMenu from '~/Components/HamburgerMenu/HamburgerMenu';
import ActionButton from '~/Components/ActionButton/ActionButton';

const Message = Style(APP_SKIN);

function MessageWrap() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    const hiddenItem = document.querySelector('.hidden-item');
    const childEl = hiddenItem.querySelector('.inner');

    // 애니메이션 종료 후 display 속성 조정
    const onTransitionEnd = () => {
      if (!hiddenItem.classList.contains('isActive')) {
        childEl.style.display = 'none'; // inner 요소 숨기기
      }
      hiddenItem.removeEventListener('transitionend', onTransitionEnd); // 이벤트 리스너 제거
    };

    if (isMenuOpen) {
      // 메뉴 닫기
      hiddenItem.style.maxHeight = '0'; // 높이 줄이기
      hiddenItem.addEventListener('transitionend', onTransitionEnd); // 애니메이션 완료 후 display 변경
      hiddenItem.classList.remove('isActive'); // 클래스 제거
    } else {
      // 메뉴 열기
      hiddenItem.classList.add('isActive'); // 클래스 추가
      hiddenItem.style.maxHeight = hiddenItem.scrollHeight + 'px'; // 콘텐츠 높이로 조정
      childEl.style.display = 'block'; // inner 요소 보이기
      setTimeout(() => {
        hiddenItem.style.maxHeight = hiddenItem.scrollHeight + 'px'; // 애니메이션을 위한 높이 조정
      }, 10); // 짧은 지연 후 높이 조정
    }

    setIsMenuOpen(!isMenuOpen); // 상태 토글
  }

  return (
    <Message>
      <div className={'message-item'}>
        <div className="inner">
          <div className={'action-button'}>
            <HamburgerMenu onClick={toggleMenu} className={`${isMenuOpen ? 'isActive' : ''}`} />
            <ActionButton />
          </div>
          <div className={'input-box'}>
            <MessageInput
              label={'메세지를 입력하세요.'}
              id={'message'}
              name={'message'}
              placeholder={'메세지를 입력하세요.'}
            />
          </div>
        </div>
      </div>
      <div className={`hidden-item ${isMenuOpen ? 'isActive' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="inner">
          컴포넌트 넣어봅시다 <br />
          컴포넌트 넣어봅시다 <br />
          컴포넌트 넣어봅시다 <br />
          컴포넌트 넣어봅시다 <br />
          컴포넌트 넣어봅시다 <br />
        </div>
      </div>
    </Message>
  );
}

export default MessageWrap;
