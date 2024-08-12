// HamburgerMenu.js
import React, { useState } from 'react';
import Style from './HamburgerMenuStyle';

const MenuIcon = Style(APP_SKIN); // 스타일 컴포넌트 생성

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 열림 상태 관리
  //
  const toggleMenu = () => {
    setIsOpen(!isOpen); // 메뉴 열림/닫힘 상태 토글

    console.log(isOpen, '::::::::');
  };

  return (
    <MenuIcon onClick={toggleMenu} className={isOpen ? 'isActive' : ''}>
      <div />
      <div />
      <div />
    </MenuIcon>
  );
};

export default HamburgerMenu;
