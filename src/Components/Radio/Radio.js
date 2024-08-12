import React from 'react';
import Style from './RadioStyle';

const Radio = Style(APP_SKIN);

function RadioWrap({ label, ...rest }) {
  return (
    <Radio className="checkbox">
      <input type="radio" {...rest} />
      <span>{label}</span>
    </Radio>
  );
}

export default RadioWrap;
