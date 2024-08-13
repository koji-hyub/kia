// HamburgerMenu.js
import React from 'react';
import Style from './HamburgerMenuStyle';

const MenuIcon = Style(APP_SKIN); // 스타일 컴포넌트 생성

const HamburgerMenu = ({ onClick, className }) => {
  return (
    <MenuIcon onClick={onClick} className={className}>
      <div />
      <div />
      <div />
    </MenuIcon>
  );
};

export default HamburgerMenu;
