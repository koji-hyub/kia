import React from 'react';
import Style from './CheckboxStyle';

const Checkbox = Style(APP_SKIN);
function CheckboxWrap({ label, ...rest }) {
  // console.log(...rest, '::::::?');

  return (
    <Checkbox>
      <input type="checkbox" {...rest} />
      <span>{label}</span>
    </Checkbox>
  );
}

export default CheckboxWrap;
