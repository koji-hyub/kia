import React from 'react';
import Style from './ButtonStyle';

const Button = Style(APP_SKIN);
function ButtonWrap({ name, onClick, iconLeft, iconRight, className, ...rest }) {
  // 선택된 컴포넌트
  const handleClick = onClick || (() => {});
  return (
    <>
      <Button {...rest} onClick={handleClick} className={className && className}>
        {iconLeft && iconLeft}
        <span>{name}</span>
        {iconRight && iconRight}
      </Button>
    </>
  );
}
export default ButtonWrap;
