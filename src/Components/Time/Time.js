import React, { useState, useEffect } from 'react';
import Style from './TimeStyle';
import Text from '../Text/Text';

const Time = Style(APP_SKIN);

function TimeWrap({ getCurrentTime, align, ...rest }) {
  return (
    <Time>
      <Text
        align={align}
        size={'--font-size-7'}
        color={'--Grey-Spectrum-Coll-Grey-40'}
        text={getCurrentTime}
      />
    </Time>
  );
}

export default TimeWrap;
