import React from 'react';
import styled, { css } from 'styled-components';
// import IconCirceArrow from '~/assets/images/main/icon_circleArrow.svg';

const CommonSkin = css`
  //height: calc(100%);
  padding: 20rem 20rem 20rem;
  overflow-y: auto;
`;
const BasicSkin = css`
  /* 미디어 쿼리 정의 */
  @media (max-width: 1279px) {
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
