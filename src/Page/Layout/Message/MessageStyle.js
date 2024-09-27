import styled, { css } from 'styled-components';

const CommonSkin = css`
  .message-area {
    padding: 16rem 20rem;
    background: white; /* 푸터 배경색 */
    background: var(--Primary-Polar-White);
    display: flex;
    align-items: flex-end;
    .message-input {
      display: flex;
      align-items: flex-end;
      width: 100%;
      padding: 6rem 6rem 6rem 20rem;
      border-radius: 24px;
      border: 1rem solid var(--Primary-Midnight-Black, #05141f);
      background: var(--Primary-Polar-White, #fff);
      //margin-left: 12rem;
      .textarea {
        outline: none;
        padding-top: 8rem;
        border: none;
        width: calc(100% - 80rem);

        color: var(--Primary-Midnight-Black, #05141f);
        /* Body/B5 */
        font-size: var(--font-size-5, 14rem);
        font-weight: var(--font-weight-regular, 400);
        line-height: var(--line-height-4, 20rem); /* 142.857% */

        height: 36rem;
        max-height: 60rem;
      }
      .send-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end; //top: 6rem;
        //right: 6rem;
        .clear {
          //display: none;
          justify-content: center;
          align-items: center;
          background: #ccd0d3;
          width: 24rem;
          height: 24rem;
          border-radius: 50%;
          margin-right: 10rem;
          margin-left: 10rem;
        }

        .send {
          color: var(--Primary-Polar-White);
          &.isActive {
            background: #05141f;
          }
          &.isSearch {
            background: #05141f;
          }
          display: flex;
          width: 36rem;
          height: 36rem;
          justify-content: center;
          align-items: center;
          background: #e7e9ec;
          padding: 8rem;
          border-radius: 50%;
        }
      }
    }
  }

  .bottom-sheet {
    padding: 24rem 24rem 0;
    border-radius: 16rem 16rem 0 0;
    background: var(--Primary-Polar-White, #fff);
    overflow: hidden;
    //transition: height 0.4s;
    transition: height 0.4s ease, opacity 0.5s ease, visibility 0.5s ease;
    height: 0; /* 초기 높이 0 */
    opacity: 0; /* 초기 투명도 0 */
    visibility: hidden; /* 초기 비가시화 */
    > .inner {
      transition: height 0.3s ease-in-out; /* 트랜지션 애니메이션 settimeout의 일치시킨다. */
      overflow-y: scroll;
      //overflow: hidden;
      max-height: 136rem;
    }
  }

  .bottom-item {
    li {
      &:hover {
        border-radius: 4px;
        background: var(--Color-Spectrum-Neon-Green-Neon-Green-10, #f1f8e9);
      }
      button {
        text-align: left;
        padding: 8rem;
        width: 100%;
        display: block;

        color: var(--Color-Spectrum-Neon-Green-Neon-Green-100, #0f2009);
        /* Body/B7 */
        font-size: var(--font-size-7, 12rem);
        font-weight: var(--font-weight-regular, 400);
        line-height: var(--line-height-8, 18rem); /* 150% */
        span {
          color: var(--Secondary-Neon-Green, #468f13);
        }
      }
    }
  }
  //.message-item {
  //  .inner {
  //    padding: 12rem 20rem;
  //    display: flex;
  //    align-items: center;
  //    margin: 0 auto;
  //    text-align: center;
  //    .action-button {
  //      display: flex;
  //      align-items: center;
  //
  //      button {
  //        margin-right: 12rem;
  //      }
  //    }
  //    .input-box {
  //      flex: 2;
  //    }
  //  }
  //}
  //
  ///* hidden-item 기본 스타일 */
  //.hidden-item {
  //  overflow: hidden;
  //  background: #edf0f2;
  //  transition: max-height 0.3s ease-out; /* 애니메이션 시간 0.5초로 설정 */
  //  max-height: 0; /* 초기에는 높이 0으로 설정 */
  //  .inner {
  //    display: none; /* 초기에는 숨김 */
  //  }
  //  /* 활성화 상태 */
  //  &.isActive {
  //    max-height: 1000rem; /* 적절한 최대 높이 설정 */
  //
  //    .inner {
  //      display: block; /* 활성화 시 보이기 */
  //    }
  //  }
  //}
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
