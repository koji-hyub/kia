import React from 'react';
import Style from './InfoBoxStyle';

const InfoBox = Style(APP_SKIN);

function InfoBoxWrap(props) {
  const { children } = props;

  return (
    <InfoBox>
      {children ? (
        <div className={'info'}>{children}</div>
      ) : (
        <div className={'info'}>contentcontentcontentcontentcontentcontentcontent</div>
      )}
    </InfoBox>
  );
}

export default InfoBoxWrap;
