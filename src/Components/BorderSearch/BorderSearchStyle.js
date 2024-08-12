import styled, { css } from 'styled-components';
const CommonSkin = css``;
const BasicSkin = css`
  margin-bottom: 16rem;
  > .inner {
    width: 1280rem;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .search {
      width: 328rem;
    }
    .total {
      color: #000;
      font-size: 14rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.21rem;
    }
  }
  @media (max-width: 1279px) {
    > .inner {
      width: 100%;
      > div {
        width: 100%;
        .search {
          width: 100%;
        }
      }

      .total {
        display: none;
      }
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
