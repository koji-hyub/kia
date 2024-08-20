import React from 'react';
import Style from './ChangeTextStyle';
import Text from '../Text/Text';

const ChangeText = Style(APP_SKIN);
const txt = '상담사 채팅을 시작합니다';
function ChangeTextWrap(props) {
  return (
    <ChangeText>
      <Text
        className={'text'}
        size={'--font-size-7'}
        color={'--Grey-Spectrum-Coll-Grey-40'}
        text={txt}
      />
    </ChangeText>
  );
}

export default ChangeTextWrap;
