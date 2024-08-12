import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일

const CommonSkin = css`
  .inner {
  }
  /* 미디어 쿼리 정의 */
  @media (max-width: 1279px) {
    .inner {
      width: auto;
    }
  }
`;

const BasicSkin = css`
  margin-top: 20rem;
  > .inner {
    border-top: 2rem solid #000;
    width: 1280rem;
    margin: 0 auto;
    .accordion-item {
      .accordion-title {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        height: 50rem;
        padding: 0px 24rem;
        border-bottom: 1px solid #e1e1e1;
        &.isActive {
          & + .accordion-content {
            display: block;
          }
          svg {
            transform: rotate(-90deg);
          }
        }
        .tit {
          font-size: 16rem;
          font-weight: 400;
          line-height: 140%; /* 22.4px */
          letter-spacing: -0.24rem;
        }
        svg {
          transform: rotate(90deg);
        }
      }
      .accordion-content {
        display: none;
        transition: height 0.3s;
        color: #000;
        padding: 27rem 24rem;
        font-size: 14rem;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.21rem;
        background: #f8f8f8;
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
