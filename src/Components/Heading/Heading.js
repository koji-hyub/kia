import React from 'react';
import Style from '../Heading/HeadingStyle';

const Heading = Style(APP_SKIN);
function HeadingWrap({ level, title, badge, state, color, iconLeft, ...rest }) {
  const HeadingTag = `h${level}`;
  return (
    <>
      <Heading as={HeadingTag} level={level} {...rest}>
        {title
          ? title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {index === 0 && iconLeft && iconLeft}
                {line}
                {index !== title.split('\n').length - 1 && <br />}
                {index === 0 && state && <span className={'point'}>{state}</span>}
                {/* 마지막 줄이 아닌 경우에만 <br> 추가 */}
              </React.Fragment>
            ))
          : '기본 타이틀 입니다.'}
      </Heading>
    </>
  );
}

export default HeadingWrap;
