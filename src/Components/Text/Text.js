import React from 'react';
import Style from './TextStyle';
const Text = Style(APP_SKIN);
function TextWrap(props) {
  const { size, align, text, iconLeft, ...rest } = props;

  return (
    <Text size={size} align={align ? align : ''} {...rest}>
      {iconLeft && <div className={'left'}>{iconLeft}</div>}
      {/*<div>{text ? text : '기본 텍스트 입니다.'}</div>*/}
      <div dangerouslySetInnerHTML={{ __html: text ? text : '기본 텍스트 입니다.' }} />
    </Text>
  );
}

export default TextWrap;
