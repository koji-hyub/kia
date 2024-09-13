import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: flex;
  justify-content: flex-end;
  .message-box {
    display: block;
    width: 100%;
    .text-box {
      margin-top: 4rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .tooltip {
        position: relative;
        .text {
          padding: 2rem 8rem;
          position: absolute;
          top: 32rem;
          border-radius: 4rem;
          background: var(--Grey-Spectrum-Coll-Grey-80, #303c47);
          color: var(--Primary-Polar-White, #fff);
          font-size: var(--font-size-7, 12px);
          font-style: normal;
          font-weight: var(--font-weight-regular, 400);
          line-height: var(--line-height-8, 18rem); /* 150% */
          white-space: nowrap;
          &:before {
            position: absolute;
            top: -6rem;
            left: 8rem;
            display: block;
            content: '';
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 6px solid #303c47;
          }
        }
      }

      .inner {
        margin-left: 6rem;
        width: auto;
        max-width: 80%;
        display: inline-flex;
        align-items: center;
        padding: 8rem 16rem 8rem;
        border-radius: 16rem 0 16rem 16rem;
        background: var(--Primary-Midnight-Black);
        > div {
          margin-bottom: 0;
          div {
            // TEXT 컴포넌트
            line-height: 157.143%;
          }
        }
      }
    }
    .modify {
      width: 100%;
      margin: 4rem 0 4rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 8rem 12rem;
      flex-direction: column;
      border-radius: 16rem 0 16rem 16rem;
      background: var(--Grey-Spectrum-Coll-Grey-80, #303c47);
      textarea {
        background: transparent;
        border: 0;
        height: 100%;
        width: 100%;
        resize: none;

        color: var(--Primary-Polar-White, #fff);
        font-size: var(--font-size-5, 14rem);
        font-style: normal;
        font-weight: var(--font-weight-regular, 400);
        line-height: var(--line-height-4, 20rem); /* 142.857% */
      }
      .btn-area {
        display: flex;

        button + button {
          margin-left: 8rem;
        }
      }
    }
  }
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
