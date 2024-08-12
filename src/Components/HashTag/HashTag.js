import React from 'react';

import Style from './HashTagStyle';

const Hashtag = Style(APP_SKIN);
function HashtagWrap({ tag, ...reset }) {
  return (
    <Hashtag {...reset}>
      <span>{tag}</span>
    </Hashtag>
  );
}

export default HashtagWrap;
