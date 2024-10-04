import React from 'react';
import Style from './DotItemStyle';

const DotItem = Style(APP_SKIN);

function DotItemWrap(props) {
  const { data, text } = props;
  return (
    <DotItem>
      <ul>
        {data && data.length > 0 ? (
          data.map((item) => <li key={item.id && item.id}>{item.text && item.text}</li>)
        ) : (
          <li>{text ? text : 'content'}</li>
        )}
      </ul>
    </DotItem>
  );
}

export default DotItemWrap;
