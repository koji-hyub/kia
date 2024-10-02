import React from 'react';

import Style from './ErrorStyle';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import Text from '../Text/Text';

const Error = Style(APP_SKIN);

function ErrorWrap({ children }) {
  return (
    <Error>
      {children ? (
        <div className={'inner'}>{children}</div>
      ) : (
        <div className={'inner'}>
          <Heading level={1} title={'일시적인 오류입니다.'} />
          <Text className={'txt'} text={'잠시 후에 다시 시도해 주세요.'} />
          <Button className={'secondary'} text={'챗봇 메인화면으로 돌아가기'} />
        </div>
      )}
    </Error>
  );
}

export default ErrorWrap;
