import React from 'react';
import Style from './ContentItemStyle';
import Button from '../Button/Button';

const ContentItem = Style(APP_SKIN);
function ContentItemWrap({ children, className }) {
  return (
    <ContentItem className={className && className}>
      {children && children}
      <div>
        <Button /> <Button />
      </div>
    </ContentItem>
  );
}

export default ContentItemWrap;
