import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  .message-item {
    .inner {
      padding: 12rem 20rem;
      display: flex;
      align-items: center;
      margin: 0 auto;
      text-align: center;
      .action-button {
        display: flex;
        align-items: center;

        button {
          margin-right: 12rem;
        }
      }
      .input-box {
        flex: 2;
      }
    }
  }

  .hidden-item {
    max-height: 0;
    overflow: hidden;
    background: #edf0f2;
    transition: max-height 2s ease-out;
    opacity: 0;
    box-shadow: 0 2rem 8rem 0 rgba(34, 34, 34, 0.05) inset;

    .inner {
      display: none;
    }
    &.isActive {
      max-height: 1000rem; /* 실제 콘텐츠 크기에 따라 적절히 조정 */
      opacity: 1;
      .inner {
        display: block;
      }
    }
  }
`;

const BasicSkin = css`
  //background: #383838;
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
