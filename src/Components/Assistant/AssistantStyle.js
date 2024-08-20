import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  .icon-box {
    display: flex;
    align-items: flex-end;
    .icon {
      display: block;
      box-sizing: border-box;
      border-radius: 6rem;
      padding: 7rem 7rem;
      width: 32rem;
      height: 32rem;
    }
  }
  .text-box {
    margin-top: 8rem;
    display: block;
    .inner {
      width: auto;
      max-width: 80%;
      display: inline-flex;
      border-radius: 0 16rem 16rem 16rem;
      padding: 8rem 16rem;
      div {
        div {
          // TEXT 컴포넌트
          line-height: 157.143%;
        }
      }
    }
  }

  .quick-replies {
    width: 100%;
    padding: 12rem 0 12rem;
    overflow-x: scroll; /* 가로 스크롤을 활성화 */
    white-space: nowrap; /* 모든 슬라이드를 한 줄로 표시 */
    position: relative;
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Opera에서 스크롤바 숨기기 */
    }

    .item-box {
      display: flex; /* 슬라이드들을 가로로 배치 */
      .inner {
        display: inline-block; /* 각 슬라이드를 inline-block으로 배치 */
        margin-right: 8px; /* 슬라이드 사이 간격 설정 */
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
    .ai-assistant {
      margin-left: 8rem;
      color: #05141f;
      font-size: 12rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }

  .text-box {
    .inner {
      background: #edf0f2;
      div {
        div {
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
