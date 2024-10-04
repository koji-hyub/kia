import React from 'react';
import Style from './ResultStyle';
import Text from '../../Components/Text/Text';
const Result = Style(APP_SKIN);

function ResultWrap(props) {
  const { children, text } = props;
  return (
    <Result>
      {children ? (
        children
      ) : (
        <Text
          text={text ? text : 'value'}
          bold={'bold'}
          size={'--font-size-3'}
          color={'--Primary-Midnight-Black'}
        />
      )}
    </Result>
  );
}

export default ResultWrap;
