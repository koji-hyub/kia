import React, { useEffect, useRef, useState } from 'react';
import Style from './MessageInputStyle';
import {
  IconClear,
  IconError,
  IconPassword,
  IconPasswordOpen,
  IconZoom
} from '../../assets/images/common/IconSet';

const __Input = Style(APP_SKIN);

function InputWrap({ label, id, placeholder, name, type, error, msg, className, ...rest }) {
  const inputRef = useRef(null);
  const [isText, setIsText] = useState('');
  const [icon, setIcon] = useState(type === 'password' ? <IconPassword /> : <IconPasswordOpen />);
  const [inputType, setInputType] = useState(type === 'password' ? 'password' : 'text');

  const [isFocused, setIsFocused] = useState(false);

  const textHandler = (e) => {
    setIsText(e.target.value);

    const classNames = inputRef.current.className.split(' ');
    const secondClassName = classNames.length > 1 ? classNames[1] : null;

    if (secondClassName === 'password') {
      console.log(11);
    }
  };

  const clearHandler = () => {
    setIsText('');
  };

  const searchHandler = () => {
    console.log('검색버튼');
  };

  const passwordToggle = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));

    setIcon((prevIcon) =>
      prevIcon.type === IconPassword ? <IconPasswordOpen /> : <IconPassword />
    );

    inputRef.current.querySelector('input').type === 'password'
      ? inputRef.current.querySelector('input').setAttribute('type', 'text')
      : inputRef.current.querySelector('input').setAttribute('type', 'password');
  };

  return (
    <__Input>
      {label !== undefined ? <label htmlFor={id}>{label}</label> : ''}
      {!error ? (
        <div className={`input ${className}`} ref={inputRef}>
          <input
            placeholder={placeholder}
            id={id}
            name={name}
            type={type === 'text' || type === 'number' || type === 'password' ? type : inputType}
            onChange={textHandler}
            value={isText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <div className={'remote-item'}>
            {isText && isFocused && (
              <button className={'btn clear'} onMouseDown={clearHandler}>
                <IconClear />
              </button>
            )}
            {className && className === 'password' ? (
              <button className={'btn'} onMouseDown={passwordToggle}>
                {icon}
              </button>
            ) : (
              ''
            )}

            {className && className === 'search' ? (
              <button className={'btn'} onMouseDown={searchHandler}>
                <IconZoom />
              </button>
            ) : (
              ''
            )}
            {className && className === 'certification' ? (
              <div className={'certification-num'}>03:00</div>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <>
          <div className={`input ${className}`} ref={inputRef}>
            <input
              placeholder={placeholder}
              id={id}
              name={name}
              type={type === 'text' || type === 'number' || type === 'password' ? type : inputType}
              className={error == true ? 'error' : 'isTrue'}
              onChange={textHandler}
              value={isText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <div className={'remote-item'}>
              {isText && isFocused && (
                <button className={'btn error clear'} onMouseDown={clearHandler}>
                  <IconClear />
                </button>
              )}
            </div>
          </div>
          {error == true ? <p className={'error-txt'}>{msg}</p> : 'asdfasdfasfds'}
        </>
      )}
    </__Input>
  );
}

export default InputWrap;
