import React from 'react';
import Style from './LoadingStyle';

const Loading = Style(APP_SKIN);
function LoadingWrap(props) {
  return (
    <Loading>
      <div></div>
      <div></div>
      <div></div>
    </Loading>
  );
}

export default LoadingWrap;
