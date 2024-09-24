import React from 'react';
import Style from './ContentItemStyle';
import Button from '../Button/Button';

const ContentItem = Style(APP_SKIN);
function ContentItemWrap(props) {
  const { children, className } = props;
  return <ContentItem className={className && className}>{children && children}</ContentItem>;
}

export default ContentItemWrap;
