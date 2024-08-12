import React, { useEffect, useRef } from 'react';

import Style from './SubHeaderStyle';

const SubHeader = Style(APP_SKIN);

function SubHeaderWrap({ title, text }) {
  return (
    <SubHeader>
      <div className="inner">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </SubHeader>
  );
}

export default SubHeaderWrap;
