// Message.js
import React, { useState } from 'react';
import Style from './MessageStyle';
import MessageInput from '~/Components/MessageInput/MessageInput';
import HamburgerMenu from '~/Components/HamburgerMenu/HamburgerMenu';
import ActionButton from '~/Components/ActionButton/ActionButton';

const Message = Style(APP_SKIN);

function MessageWrap() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen); // 상태 토글
    console.log(isMenuOpen, 'display'); // 상태 출력
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
