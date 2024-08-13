import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  .inner {
    padding: 16rem 20rem;
    height: 56rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BasicSkin = css`
  height: 56rem;
  background: #010e18;
  color: #fff;
  .inner {
    h1 {
      color: #fff;
      font-size: 16rem;
      svg {
        margin-top: 1rem;
        margin-right: 8rem;
        width: 60rem;
        height: 14rem;
      }
    }
    .item-set {
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        & + button {
          margin-left: 15rem;
        }
        width: 20rem;
        height: 20rem;
        color: #fff;
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
