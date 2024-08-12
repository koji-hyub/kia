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
      max-width: 300rem;
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
