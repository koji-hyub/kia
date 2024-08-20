import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  letter-spacing: -0.33rem;
  display: flex;
  align-items: flex-start;
  .left {
    margin-right: 8rem;
  }
  text-align: ${(props) => {
    switch (props.align) {
      case 'center':
        return 'center';
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      default:
        return 'left';
    }
  }};

  font-weight: ${(props) => `var(${props.bold || '--font-weight-regular'})`};
  font-size: ${(props) => `var(${props.size || '--font-size-4'})`};
`;
const BasicSkin = css`
  color: ${(props) => `var(${props.color || '--Primary-Midnight-Black'})`};
`;

const ThemeSkin = css``;

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
