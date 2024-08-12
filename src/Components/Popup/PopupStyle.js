import styled, { css } from 'styled-components';

const CommonSkin = css``;
const BasicSkin = css`
  display: block;
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  .pop-wrap {
    &.large {
      width: 630rem;
      .footer {
        .inner {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20rem;
          button {
            width: 155rem;
            & + button {
              margin-left: 16rem;
            }
          }
        }
      }
    }
    &.small {
      width: 50%;
    }

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 80%;
    border-radius: 8rem;

    .top {
      .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20rem;
        border-bottom: 1rem solid #e8e8e8;
      }
    }
    .content {
      max-height: 500rem;
      overflow-y: auto;
      .inner {
        height: 100%;
        padding: 20rem;
        box-sizing: border-box;
      }
    }
    .footer {
      .inner {
        padding: 20rem;
      }
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
