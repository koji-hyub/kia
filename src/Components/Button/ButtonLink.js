import React from 'react';
import Style from './ButtonLinkStyle';

const ButtonLink = Style(APP_SKIN);

function ButtonLinkWrap(props) {
  const {
    link,
    text,
    onClick,
    iconLeft,
    iconRight,
    size = 'large', // 기본값 설정 방식 수정
    className = 'primary', // 기본값 설정 방식 수정
    disabled = false
  } = props;

  const ButtonClass = `${className ? className : ''} ${size} `;

  // 선택된 컴포넌트 클릭 핸들러
  // const handleClick = onClick || (() => {});

  return (
    <ButtonLink href={link} className={ButtonClass} disabled={disabled}>
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      <span className={'link'}>{text ? text : 'Button'}</span>
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </ButtonLink>
  );
}

export default ButtonLinkWrap;
