import React from 'react';
import Style from './ContentItemStyle';

const ContentItem = Style(APP_SKIN);
function ContentItemWrap({ children }) {
  return <ContentItem>{children}</ContentItem>;
}

export default ContentItemWrap;
