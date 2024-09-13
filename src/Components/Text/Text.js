import React from 'react';
import Style from './TextStyle';
const Text = Style(APP_SKIN);
function TextWrap({ size, align, text, iconLeft, ...rest }) {
  return (
    <Text size={size} align={align ? align : ''} {...rest}>
      {iconLeft && <div className={'left'}>{iconLeft}</div>}
      {/*{text ? text : '기본 텍스트 입니다.'}*/}
      <div>{text ? text : '기본 텍스트 입니다.'}</div>
    </Text>
  );
}

export default TextWrap;
