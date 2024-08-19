import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  //color: #000;
  display: flex;
  font-size: ${(props) => {
    switch (props.level) {
      case 1: // h1
        return '32rem';
      case 2:
        return '32rem';
      case 3:
        return '24rem';
      case 4:
        return '20rem';
      case 5:
        return '14rem';
      default:
        return '14rem';
    }
  }};
  font-weight: ${(props) => {
    switch (props.level) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 700;
      case 5:
      case 6:
        return 500;
      default:
        return 600;
    }
  }};
  .point {
    color: var(--Color-Spectrum-Neon-Green-Neon-Green-60);
    margin-left: 5rem;
  }
  line-height: 140%; /* 30.8px */
  letter-spacing: -0.33rem;
  .left {
    display: inline-flex;
    margin-left: 8rem;
  }
`;
const BasicSkin = css`
  //align-items: flex;
  color: ${(props) => `var(${props.color || '--Primary-Polar-White'})`};
`;

const ThemeSkin = css`
  color: ${(props) => `var(${props.color || '--Primary-Midnight-Black'})`};
`;

// 컴포넌트를 선택하는 함수
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
