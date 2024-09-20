import React from 'react';
import Style from './ChangeTextStyle';
import Text from '../Text/Text';

const ChangeText = Style(APP_SKIN);
// const txt = '상담사 채팅을 시작합니다';
function ChangeTextWrap(props) {
  const { text } = props;

  return (
    <ChangeText>
      <Text
        className={'text'}
        size={'--font-size-7'}
        color={'--Grey-Spectrum-Coll-Grey-40'}
        text={text ? text : '채팅 상담을 시작합니다.'}
      />
    </ChangeText>
  );
}

export default ChangeTextWrap;
