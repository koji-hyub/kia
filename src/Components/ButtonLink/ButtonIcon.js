import React from 'react';
import Style from './ButtonIconStyle';

const ButtonIcon = Style(APP_SKIN);

function ButtonWrap(props) {
  const {
    blindText,
    onClick,
    icon,
    size = 'large', // 기본값 설정 방식 수정
    className = 'primary', // 기본값 설정 방식 수정
    disabled = false
  } = props;

  const ButtonClass = `${className ? className : ''} ${size} `;

  // 선택된 컴포넌트 클릭 핸들러
  const handleClick = onClick || (() => {});

  return (
    <ButtonIcon onClick={handleClick} className={ButtonClass} disabled={disabled}>
      {icon && <span className="icon">{icon}</span>}
      <span className={'blind'}>{blindText ? blindText : '버튼'}</span>
    </ButtonIcon>
  );
}

export default ButtonWrap;
