import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: flex;
  justify-content: flex-end;
  .message-box {
    .text-box {
      margin-top: 8rem;
      display: flex;
      justify-content: flex-end;
      .inner {
        width: auto;
        max-width: 300rem;
        display: inline-flex;
        padding: 8rem 16rem;
        align-items: center;
        border-radius: 16rem 0 16rem 16rem;
        div {
          div {
            // TEXT 컴포넌트
            line-height: 157.143%;
          }
        }
      }
    }
  }
`;

const BasicSkin = css`
  .icon-box {
    .icon {
      color: #fff;
      background: #111;
    }
  }
  .message-box {
    .text-box {
      .inner {
        background: var(--Primary-Midnight-Black);
        div {
          div {
          }
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
