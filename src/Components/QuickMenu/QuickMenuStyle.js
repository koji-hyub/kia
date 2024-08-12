import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css``;
const BasicSkin = css`
  //display: none;
  position: fixed;
  //top: 50%;
  right: 20rem;
  bottom: 20rem;
  //transform: translateY(-50%);
  z-index: 10;

  li {
    margin-bottom: 12rem;
    button {
      display: inline-flex;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 40rem;
      background: #fff;
      box-shadow: 0rem 2rem 8rem 0rem rgba(0, 0, 0, 0.16);
      svg {
        transform: rotate(-90deg);
        width: 24rem;
        height: 24rem;
      }
    }
    a {
      color: #fff;
      display: inline-flex;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 40rem;
      background: #0060e6;
      box-shadow: 0rem 2rem 8rem 0rem rgba(0, 0, 0, 0.16);
    }
  }

  @media (max-width: 1279px) {
    //게시판 디테일
    top: unset;
    bottom: 20rem;
    transform: unset;
  }
`;

const ThemeSkin = css``;

const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.div`
        ${CommonSkin} ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.div`
        ${CommonSkin} ${ThemeSkin}
      `;
    default:
      return styled.div`
        ${CommonSkin} ${BasicSkin}
      `;
  }
};

export default Style;
