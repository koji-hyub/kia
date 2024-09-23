import React, { useState, useRef } from 'react';
import Style from './MessageStyle';
// import MessageInput from '../../../Components/MessageInput/MessageInput';
import { IconClear, IconSend, IconSendSearch } from '../../../assets/images/common/IconSet';

const Message = Style(APP_SKIN);

const MessageWrap = () => {
  const [message, setMessage] = useState('');
  const [inputHeight, setInputHeight] = useState(36); // 기본 높이 설정
  const inputRef = useRef(null);

  function clearButton() {
    setMessage(''); // 입력 필드 초기화
    inputRef.current.style.height = 36 + 'px';
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value);

    // 입력창 높이 조절 (최대 3줄까지)
    const textareaLineHeight = 36; // 줄당 높이
    const maxRows = 3; // 최대 줄 수

    const lines = e.target.value.split('\n').length;
    setInputHeight(Math.min(lines * textareaLineHeight, maxRows * textareaLineHeight));
  };

  return (
    <Message>
      {/*<ActionButton />*/}
      <div className={'message-input'}>
        <textarea
          ref={inputRef}
          value={message}
          onChange={handleInputChange}
          className={'textarea'}
          style={{
            height: `${inputHeight}px`,
            resize: 'none',
            overflow: 'hidden'
          }}
          rows={1}
          placeholder="메세지를 입력하세요."
        />

        <div className={'send-item'}>
          {message && (
            <button className={'clear'} onClick={clearButton}>
              <span className={'blind'}>메세지 삭제</span>
              <IconClear width={24} height={24} />
            </button>
          )}
          <button
            className={`send ${message ? 'isActive' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <IconSend width={20} height={20} />
            <span className={'blind'}>{message ? '메세지 전송' : ''}</span>
          </button>

          {/*사용자가 메세지를 보내고나서*/}
          {/*챗봇의 답변이 Searching 중 일때 활성화 */}
          <button className={'send isSearch'}>
            <IconSendSearch />
            <span className={'blind'}>{message ? '검색 중 입니다.' : ''}</span>
          </button>
        </div>
      </div>
    </Message>
  );
};

export default MessageWrap;
