import React from 'react';
import styled, { css } from 'styled-components';
const CommonSkin = css``;

const BasicSkin = css`
  background: #383838;
  padding: 40rem 0 40rem;
  .inner {
    margin: 0 auto;
    text-align: center;
    > div {
      color: #fff;
    }
  }
`;
const ThemeSkin = css`
  background: red;
`;

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
