import React, { useState, useEffect } from 'react';
import Style from './TimeStyle';
import Text from '../Text/Text';

const Time = Style(APP_SKIN);

function TimeWrap({ getCurrentTime, align, ...rest }) {
  return (
    <Time>
      <Text
        align={align}
        size={'--font-size-11'}
        color={'--Grey-Spectrum-Coll-Grey-40'}
        text={getCurrentTime ? getCurrentTime : '오전 07:18'}
      />
    </Time>
  );
}

export default TimeWrap;
