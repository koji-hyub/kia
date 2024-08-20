import React from 'react';

import Style from './QuickRepliesStyle';

const QuickReplies = Style(APP_SKIN);
function HashtagWrap({ tag, ...reset }) {
  return (
    <QuickReplies {...reset}>
      <span>{tag}</span>
    </QuickReplies>
  );
}

export default HashtagWrap;
