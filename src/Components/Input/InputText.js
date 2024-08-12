import React, { useState } from 'react';
import Style from './InputStyle';
import { IconClear, IconError, IconZoom } from '../../assets/images/common/IconSet';
// import InputText from './InputText';

const InputText = Style(APP_SKIN);

function InputTextWrap({ label, id, placeholder, name, type, error, msg, className }) {
  const [isText, setIsText] = useState('');

  const textHandler = (e) => {
    setIsText(e.target.value);
  };

  const clearHandler = (e) => {
    setIsText('');
  };

  const searchHandler = (e) => {
    console.log('검색버튼');
  };

  return (
    <InputText>
      <div className={'input-text'}>
        <textarea
          placeholder={placeholder}
          id={id}
          name={name}
          type={type}
          className={'error'}
          onChange={textHandler}
          value={isText}
        />
      </div>
      <p className={'error-txt'}>{msg}</p>
    </InputText>
  );
}

export default InputTextWrap;
