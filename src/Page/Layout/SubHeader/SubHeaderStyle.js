import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const BasicSkin = css`
  .inner {
    width: 1280rem;
    margin: 0 auto;
    padding: 46rem 0 47rem;
    h2 {
      color: #fff;
      font-size: 52px;
      font-weight: 700;
      line-height: 140%; /* 72.8px */
      letter-spacing: -0.78px;
    }
    .text {
      margin-top: 12rem;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.24px;
    }
  }
  @media (max-width: 1279px) {
    .inner {
      padding: 32rem 32rem 32rem;

      h2 {
        font-size: 24rem;
      }
      p {
        margin-top: 8rem;
        font-size: 14rem;
      }
    }
  }
`;

const BasicSkin = css`
  background: #669AFF;
  color: #fff;
  .inner {
  }
  /* 미디어 쿼리 정의 */
  @media (max-width: 1279px) {
    .inner {
      width: auto;
      > div {
        padding-left: 20rem;
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
        ${BasicSkin} ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.div`
        ${BasicSkin} ${ThemeSkin}
      `;
    default:
      return styled.div`
        ${BasicSkin} ${BasicSkin}
      `;
  }
};

export default Style;
