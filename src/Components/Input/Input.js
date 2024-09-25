import React, { useRef, useState } from 'react';
import Style from './InputStyle';
import { IconClear } from '../../assets/images/common/IconSet';
import Text from '../Text/Text';

const Input = Style(APP_SKIN);

function InputWrap(props) {
  const { label, required, id, placeholder, name, type, error, errorMsg, msg, className, ...rest } =
    props;
  const inputRef = useRef(null); // input에 직접 접근할 때 사용
  const [isText, setIsText] = useState(''); // 입력된 텍스트 상태
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태

  const textHandler = (e) => {
    setIsText(e.target.value); // 입력 내용 업데이트
  };

  const clearHandler = () => {
    setIsText(''); // 텍스트 초기화
  };

  return (
    <Input>
      {label && (
        <label className={required ? 'required' : ''} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={`input ${className}`} ref={inputRef}>
        <input
          placeholder={placeholder}
          id={id}
          name={name}
          type={type ? type : 'text'}
          onChange={textHandler}
          value={isText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="remote-item">
          {isText && isFocused && (
            <button className="btn clear" onMouseDown={clearHandler}>
              <IconClear width={24} height={24} />
            </button>
          )}
        </div>
      </div>
      {error ? (
        <Text className={'msg-txt'} color={'--Alert-Error'} text={errorMsg} />
      ) : (
        <Text className={'msg-txt'} color={'--Grey-Spectrum-Coll-Grey-50'} text={msg} />
      )}
    </Input>
  );
}

export default InputWrap;
