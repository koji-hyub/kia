import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css``;
const BasicSkin = css`
  letter-spacing: -0.33px;
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
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '16rem';
      case 'medium':
        return '14rem';
      case 'small':
        return '12rem';
      default:
        return '14rem';
    }
  }};
  font-weight: ${(props) => {
    switch (props.size) {
      case 'large':
      case 'medium':
      case 'small':
        return 500;
      default:
        return;
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'color01': // 말풍선 텍스트 컬러
        return '#05141F';
      case 'color02':
        return '#0060E6';
      case 'color03':
        return '#707070';
      case 'color04': // 날자 컬러
        return '#CCD0D3';
      default:
        return '#000';
    }
  }};
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
