import React from 'react';
import Style from './EtcStyle';

const Badge = Style(APP_SKIN);
function BadgeWrap({ className, text }) {
  return (
    <Badge className={className}>
      <div>{text}</div>
    </Badge>
  );
}

export default BadgeWrap;
