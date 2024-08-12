import React from 'react';
import styled, { css } from 'styled-components';

/* 인풋 리셋 */
const CommonSkin = css``;
const BasicSkin = css`
  &.code-area {
    margin-top: 16rem;
    position: relative;
    &:before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 29rem;
      background: #e8e8e8;
      //background: red;
    }
    .title {
      position: absolute;
      top: 0;
      left: 0;
      color: #000;
      font-size: 14rem;
      font-weight: 300;
      height: 29rem;
      padding: 9rem 20rem;
      background: #f8f8f8;
    }

    .code-box {
      background: #f8f8f8;

      font-weight: 300;
      padding: 47rem 18rem 18rem;
      pre {
        color: #000;
        font-size: 14rem;
        font-family: 'Noto Sans KR';
        code {
          color: #000;
          font-size: 14rem;
          font-family: 'Noto Sans KR';
        }
      }
    }
  }
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
