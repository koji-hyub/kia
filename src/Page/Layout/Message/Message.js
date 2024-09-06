import React, { useState, useRef } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // 기본 높이 설정
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);

    // 입력창 높이 조절 (최대 3줄까지)
    const textareaLineHeight = 20; // 줄당 높이
    const maxRows = 3; // 최대 줄 수

    const lines = e.target.value.split('\n').length;
    setInputHeight(Math.min(lines * textareaLineHeight, maxRows * textareaLineHeight));
  };

  return (
    <div
      style={{
        height: `${inputHeight + 20}px`,
        display: 'flex',
        alignItems: 'center',
        padding: '10px'
      }}
    >
      <textarea
        ref={inputRef}
        value={message}
        onChange={handleInputChange}
        style={{
          height: `${inputHeight}px`,
          width: '100%',
          resize: 'none',
          overflow: 'hidden'
        }}
        rows={1}
        placeholder="메세지를 입력하세요..."
      />
    </div>
  );
};

export default MessageInput;
