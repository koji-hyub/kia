import React from 'react';

import Style from './_QuickRepliesStyle';

const _QuickReplies = Style(APP_SKIN);
function HashtagWrap({ tag, ...reset }) {
  return (
    <_QuickReplies {...reset}>
      <span>{tag}</span>
    </_QuickReplies>
  );
}

export default HashtagWrap;
