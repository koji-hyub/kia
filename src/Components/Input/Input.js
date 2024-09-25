import React, { useRef, useState } from 'react';
import Style from './InputStyle';
import { IconClear } from '../../assets/images/common/IconSet';
const Input = Style(APP_SKIN);

function InputWrap(props) {
  const {
    label,
    required,
    id,
    placeholder,
    name,
    type,
    error,
    msg,
    className,
    // iconClearText = 'Clear', // 기본값 설정
    iconPasswordText = 'Show Password',
    iconPasswordOpenText = 'Hide Password',
    iconSearchText = 'Search',
    ...rest
  } = props;
  const inputRef = useRef(null); // input에 직접 접근할 때 사용
  const [isText, setIsText] = useState(''); // 입력된 텍스트 상태
  const [inputType, setInputType] = useState(type === 'password' ? 'password' : type); // 입력 필드 타입 관리
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태

  const textHandler = (e) => {
    setIsText(e.target.value); // 입력 내용 업데이트
  };

  const clearHandler = () => {
    setIsText(''); // 텍스트 초기화
  };

  const passwordToggle = () => {
    // 비밀번호 표시/숨기기 토글
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <Input>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={`input ${className}`} ref={inputRef}>
        <input
          placeholder={placeholder}
          id={id}
          name={name}
          type={inputType}
          onChange={textHandler}
          value={isText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="remote-item">
          <IconClear width={24} height={24} />
          {isText && isFocused && (
            <button className="btn clear" onMouseDown={clearHandler}>
              <IconClear width={24} height={24} />
            </button>
          )}
          {className === 'password' && (
            <button className="btn" onMouseDown={passwordToggle}>
              {inputType === 'password' ? iconPasswordText : iconPasswordOpenText}
            </button>
          )}
          {className === 'search' && (
            <button className="btn" onMouseDown={() => console.log('검색 버튼')}>
              {iconSearchText}
            </button>
          )}
        </div>
      </div>
      {error && <p className="error-txt">{msg}</p>}
    </Input>
  );
}

export default InputWrap;
