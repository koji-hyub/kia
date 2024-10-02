import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  .text-box {
    margin: 12rem 0 12rem;
  }
`;
const BasicSkin = css`
  //align-items: flex;
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
