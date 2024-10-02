import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  //margin-bottom: 12rem;
  letter-spacing: -0.33rem;
  display: flex;
  align-items: flex-start;
  & + & {
    margin-top: 12rem;
    margin-bottom: 12rem;
  }

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
  color: ${(props) => `var(${props.color || '--Primary-Midnight-Black'})`};
  font-size: ${(props) => `var(${props.size ? props.size : '--font-size-5'})`};
  font-weight: ${(props) => `var(${props.bold ? '--font-weight-bold' : '--font-weight-regular'})`};
  word-break: break-all; /* 단어가 너무 길면 어디서든 줄을 바꿔서 표시 */
  //word-break: break-word; /* 단어가 줄을 넘어갈 때 자연스럽게 줄바꿈 */
`;
const BasicSkin = css``;

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
