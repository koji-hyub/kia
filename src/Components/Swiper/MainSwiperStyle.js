import styled, { css } from 'styled-components';
const CommonSkin = css``;
const BasicSkin = css`
  height: 530rem;
  background: #383838;
  color: #fff;
  position: relative;
  .swiper {
    height: 100%;
    .item {
      width: 1280rem;
      height: 100%;
      //background-size: 807rem 530rem;
      margin: 0 auto;
      .title {
        padding-top: 100rem;
        font-size: 52rem;
        color: #fff;
        margin-bottom: 15rem;
        font-weight: 300;
        line-height: 140%;
        letter-spacing: -0.78px;
        strong {
          font-weight: 700;
        }
      }
      .s-title {
        font-size: 20rem;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
        letter-spacing: -0.3px;
        color: #fff;
        margin-bottom: 60rem;
      }
      .btn {
        border: 1rem solid #e8e8e8;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 23rem;
        padding: 11px 12px 11px 20px;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 14rem;
        }
      }
    }
  }
  .remote {
    z-index: 10;
    position: absolute;
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1280rem;
    text-align: right;

    .inner {
      //text-align: right;
      min-width: 125rem;
      display: inline-flex;
      align-items: center;
      font-size: 14rem;
      font-style: normal;
      font-weight: 500;
      border-radius: 20rem;
      background: rgba(0, 0, 0, 0.4);
      justify-content: space-between;
      padding: 10rem 12rem;
      .current-page {
        text-align: center;
        width: 25rem;
      }
    }
    svg {
      width: 20rem;
      height: 20rem;
      margin: 0;
      padding: 0;
    }
    .prev {
      transform: rotate(-180deg);
    }
    button {
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;
      color: #fff;
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
