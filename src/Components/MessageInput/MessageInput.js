import React, { useState } from 'react';
import Style from './MessageInputStyle';
import { IconClear, IconSend } from '~/assets/images/common/IconSet';

const MessageInput = Style(APP_SKIN);

function InputWrap({ label, id, placeholder, name, type, className }) {
  const [value, setValue] = useState(''); // 입력 값 상태
  function onValueChange(e) {
    setValue(e.target.value);
  }
  function clearButton() {
    setValue(''); // 입력 필드 초기화
  }
  return (
    <MessageInput>
      <label className={'blind'} htmlFor={id}>
        {label}
      </label>
      <div className={`input-wrap ${className || ''}`}>
        <input
          placeholder={placeholder}
          id={id}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onValueChange}
        />
        <div className={'send-item'}>
          {value && (
            <button className={'clear'} onClick={clearButton}>
              <span className={'blind'}>메세지 삭제</span>
              <IconClear width={24} height={24} />
            </button>
          )}
          <button
            className={`send ${value ? 'isActive' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={'blind'}>{value ? '메세지 전송' : ''}</span>
            <IconSend />
          </button>
        </div>
      </div>
    </MessageInput>
  );
}

export default InputWrap;
