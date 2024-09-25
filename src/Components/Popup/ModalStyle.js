import styled, { css } from 'styled-components';

// 공통 스타일 정의
const CommonSkin = css`
  // 딤
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;

  z-index: 1000;
  overflow: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
  > .inner {
    height: 0; /* 초기 높이 */
    box-sizing: border-box;
    background: #fff;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, height 0.3s ease-in-out; /* 트랜지션 애니메이션 settimeout의 일치시킨다. */

    border-radius: 8rem;

    /* Below Low */
    box-shadow: 4rem 4rem 10rem 0 rgba(5, 20, 31, 0.08);
    //센터 팝업 초기 위치
    padding: 24rem;
    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24rem;
      h2 {
        color: var(--Primary-Midnight-Black, #05141f);

        font-size: var(--font-size-4);
        font-weight: var(--font-weight-bold, 600);
        line-height: var(--line-height-3, 24rem); /* 150% */
      }
    }
    > main {
    }
    > footer {
      margin-top: 24rem;
      .link {
        font-size: var(--font-size-7, 12px);
        color: var(--Primary-Midnight-Black, #05141f);
      }
      .btn {
        width: 100%;
      }
      .btn-area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        > .btn {
          &:nth-child(1) {
            //flex: 0 0 80rem; /* 첫 번째 버튼 고정 크기 */
            min-width: auto;
            width: 100rem;
          }

          &:nth-child(2) {
            //flex: 1; /* 두 번째 버튼은 남은 공간을 차지 */
            //min-width: 0; /* 최소 너비는 0으로 설정 */
            width: calc(100% - 108rem);
          }
        }
      }
    }
  }

  &.isActive {
    display: flex;
    visibility: visible; /* 보이도록 설정 */
    opacity: 1; /* 불투명하도록 설정 */

    > .inner {
      height: auto; /* 높이를 자동으로 설정하여 콘텐츠가 보이도록 설정 */
    }
  }

  &.popup-top {
    justify-content: flex-start;
  }

  &.popup-center {
    justify-content: center;
    > .inner {
      width: 90%;
      margin: 0 auto;
      transform: translateY(-10px); /* 초기 위치를 화면 위로 설정 */
    }
  }
  &.popup-bottom {
    justify-content: flex-end;
  }

  &.popup-pull {
    justify-content: flex-end;

    .inner {
      display: flex;
      flex-direction: column; /* 세로 방향으로 쌓기 */

      overflow: hidden;
      header {
        flex: 0 0 auto;
      }
      main {
        flex: 1;
        overflow-y: auto;
      }
      footer {
        flex: 0 0 auto;
      }
    }
  }

  //textarea {
  //  font-size: var(--font-size-5, 14px);
  //  resize: none;
  //  width: 100%;
  //  height: 118rem;
  //  padding: 12rem 16rem;
  //  border-radius: 4rem;
  //  border: 1px solid var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
  //  background: var(--Primary-Polar-White, #fff);
  //}

  // 컨텐츠 영역
  .satisfied {
    h3 {
      margin-bottom: 8rem;
    }
    .evaluate {
      margin: 8rem 0 24rem;
      display: flex;
      padding: 12rem 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      border-radius: 4px;
      border: 1rem solid var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
      background: var(--Grey-Spectrum-Coll-Grey-02, #f2f4f6);

      .start-set {
        margin-bottom: 8rem;
      }
    }
  }

  // 정보 입력
  .member-information {
    ul {
      li {
        margin-bottom: 12rem;
      }
    }
  }
`;

const BasicSkin = css`
  /* 추가적인 BasicSkin 스타일이 여기에 들어갈 수 있습니다. */
`;

const ThemeSkin = css`
  /* 추가적인 ThemeSkin 스타일이 여기에 들어갈 수 있습니다. */
`;

const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.div`
        ${CommonSkin}
        ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.div`
        ${CommonSkin}
        ${ThemeSkin}
      `;
    default:
      return styled.div`
        ${CommonSkin}
        ${BasicSkin}
      `;
  }
};

export default Style;
