import React from 'react';
import Style from './ContentItemStyle';

const ContentItem = Style(APP_SKIN);
function ContentItemWrap(props) {
  return <ContentItem>이거슨~</ContentItem>;
}

export default ContentItemWrap;
