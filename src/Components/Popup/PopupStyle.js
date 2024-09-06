import styled, { css } from 'styled-components';

// 공통 스타일 정의
const CommonSkin = css`
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
    position: fixed;
    background: #fff;
    border-radius: 8rem;
    transition: opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease; // 트랜지션 설정

    &.center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;

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
    }

    &.bottom {
      border-radius: 8rem 8rem 0 0;
      border: 1px solid red;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-height: 0; // 초기 상태에서 최대 높이 0으로 설정
      transform: translateY(100%); // 초기 상태에서 위치 설정
      opacity: 0; // 초기 상태에서 투명하도록 설정
      overflow: hidden; // 콘텐츠가 잘리지 않도록 설정

      &.isActive {
        max-height: 500px; // 열릴 때의 최대 높이
        transform: translateY(0); // 열릴 때의 위치
        opacity: 1; // 열릴 때 불투명하게 설정
      }

      &.isClosing {
        max-height: 0; // 닫힐 때의 최대 높이
        transform: translateY(100%); // 닫힐 때의 위치
        opacity: 0; // 닫힐 때 투명하게 설정
      }
    }

    .top-area {
      .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20rem;
        border-bottom: 1rem solid #e8e8e8;
      }
    }

    .middle-area {
      max-height: 500rem;
      overflow-y: auto;
      .inner {
        height: 100%;
        padding: 20rem;
        box-sizing: border-box;
      }
    }

    .footer-area {
      .inner {
        padding: 20rem;
      }
    }
  }
`;

const BasicSkin = css``;

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
