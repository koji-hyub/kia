import React from 'react';
import Style from './ContentItemStyle';

const ContentItem = Style(APP_SKIN);
function ContentItemWrap({ children, className }) {
  return <ContentItem className={className && className}>{children}</ContentItem>;
}

export default ContentItemWrap;
