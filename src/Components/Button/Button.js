import React from 'react';
import Style from './ButtonStyle';

const Button = Style(APP_SKIN);

function ButtonWrap(props) {
  const {
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
  const handleClick = onClick || (() => {});

  return (
    <Button onClick={handleClick} className={ButtonClass} disabled={disabled}>
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      <span className={'text'}>{text ? text : 'Button'}</span>
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </Button>
  );
}

export default ButtonWrap;
