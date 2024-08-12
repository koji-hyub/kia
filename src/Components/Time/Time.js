import React, { useState, useEffect } from 'react';
import Style from './TimeStyle';
import Text from '../Text/Text';

const Time = Style(APP_SKIN);

function TimeWrap({ getCurrentTime, align, ...rest }) {
  return (
    <Time align={align}>
      <Text size={'small'} color={'color04'} text={getCurrentTime} /> {/* Text 컴포넌트 렌더링 */}
    </Time>
  );
}

export default TimeWrap;
