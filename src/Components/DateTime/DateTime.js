import React, { useState, useEffect } from 'react';
import Style from './DateTimeStyle';
import Text from '../Text/Text';

const DateTime = Style(APP_SKIN);

function TimeWrap({ getCurrentTime, ...rest }) {
  return (
    <DateTime>
      <Text size={'--font-size-7'} color={'--Primary-Polar-White'} text={'YY.MM.DD 00:00'} />
    </DateTime>
  );
}

export default TimeWrap;

/* Body/B7 */
