import React, { useState } from 'react';
import Style from './ActionButtonStyle';
import { IconDotMenu } from '../../assets/images/common/IconSet';

const ActionButton = Style(APP_SKIN); // 스타일 컴포넌트 생성

const ActionButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 열림 상태 관리
  //
  const toggleMenu = () => {
    setIsOpen(!isOpen); // 메뉴 열림/닫힘 상태 토글
    console.log(isOpen);
  };

  return (
    <>
      <ActionButton onClick={toggleMenu} className={isOpen ? 'isActive' : ''}>
        <IconDotMenu width={24} height={24} />
      </ActionButton>
    </>
  );
};

export default ActionButtonMenu;
