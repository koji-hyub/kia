import React from 'react';

import Style from './QuickRepliesStyle';
import { Link } from 'react-router-dom';

const QuickReplies = Style(APP_SKIN);
function HashtagWrap({ tag, link, ...reset }) {
  return (
    <QuickReplies href={link} {...reset}>
      <span>{tag}</span>
    </QuickReplies>
  );
}

export default HashtagWrap;
