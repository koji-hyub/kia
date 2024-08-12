import styled, { css } from 'styled-components';

const CommonSkin = css``;
const BasicSkin = css`
  &.search-wrap {
    width: 850rem;
    margin: 60rem auto 160rem;
    .inner {
      position: relative;
      input[type='text'] {
        height: 82rem;
        border-radius: 44px;
        background: #fff;
        border: 4px solid #669aff;
        width: 100%;
        color: #000;
        font-size: 20rem;
        font-weight: 700;
        line-height: 140%; /* 28px */
        letter-spacing: -0.3px;
        padding: 0 70rem 0 30rem;
        &::placeholder {
          color: #9c9c9c;
          font-weight: 700;
        }
      }
      button {
        color: #949ca5;
        position: absolute;
        top: 50%;
        right: 40rem;
        transform: translateY(-50%);
      }
    }
  }
  .bets-tag {
    margin-top: 12rem;
    padding: 0 48rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .tit {
      color: #000;
      font-size: 14rem;
      font-weight: 700;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.21rem;
    }
    .tag {
      margin-left: 28rem;
      a {
        display: inline-flex;
        margin-right: 24rem;
        color: #707070;
        font-size: 14rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.21rem;
      }
    }
  }
  /* 미디어 쿼리 정의 */
  @media (max-width: 1279px) {
    &.search-wrap {
      margin: 34rem auto 36rem;
      padding: 0 20rem 0;
      width: auto;
      .inner {
        width: auto;

        input[type='text'] {
          height: 56rem;
          border-radius: 44px;
          font-size: 14rem;
          background: #fff;
        }
        button {
          top: 50%;
          right: 24rem;
          transform: translateY(-50%);
          svg {
            width: 24rem;
            height: 24rem;
          }
        }
      }
      .bets-tag {
        padding: 0 16rem 0;
        .tit {
          color: #000;
          font-size: 14rem;
        }
        .tag {
          margin-left: 28rem;
          a {
            font-size: 14rem;
          }
        }
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
