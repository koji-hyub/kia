import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white; /* 푸터 배경색 */
  background: var(--Primary-Polar-White);
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

  /* hidden-item 기본 스타일 */
  .hidden-item {
    overflow: hidden;
    background: #edf0f2;
    transition: max-height 0.3s ease-out; /* 애니메이션 시간 0.5초로 설정 */
    max-height: 0; /* 초기에는 높이 0으로 설정 */
    .inner {
      display: none; /* 초기에는 숨김 */
    }
    /* 활성화 상태 */
    &.isActive {
      max-height: 1000rem; /* 적절한 최대 높이 설정 */

      .inner {
        display: block; /* 활성화 시 보이기 */
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
