import React, { useState } from 'react';
import Style from './InputStyle';
import { IconClear, IconError, IconZoom } from '../../assets/images/common/IconSet';
// import InputText from './InputText';

const InputText = Style(APP_SKIN);

function InputTextWrap({ id, placeholder, name, msg, className }) {
  const [isText, setIsText] = useState('');

  const textHandler = (e) => {
    setIsText(e.target.value);
  };

  return (
    <InputText>
      <div className={'input-text'}>
        <textarea
          placeholder={placeholder}
          id={id}
          name={name}
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
