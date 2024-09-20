import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  display: flex;
  align-items: center;
  font-size: ${(props) => `var(${props.size ? props.size : '--font-size-1'})`};
  font-weight: ${(props) => `var(${props.bold ? '--font-weight-bold' : '--font-weight-regular'})`};
  letter-spacing: -0.33rem;
  span {
    display: flex;
    align-items: center;
  }
  .title {
  }
  .state {
    color: ${(props) =>
      `var(${props.color ? props.color : '--Color-Spectrum-Neon-Green-Neon-Green-60'})`};
    margin-left: 6rem;
  }
  .left-icon {
    display: inline-flex;
    margin-right: 8rem;
  }
`;
const BasicSkin = css`
  //align-items: flex;
  color: ${(props) => `var(${props.color || '--Primary-Midnight-Black'})`};
`;

const ThemeSkin = css`
  color: ${(props) => `var(${props.color || '--Primary-Polar-White'})`};
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
