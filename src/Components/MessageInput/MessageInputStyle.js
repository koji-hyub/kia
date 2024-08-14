import styled, { css } from 'styled-components';

const CommonSkin = css`
  .input-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 24rem;
    overflow: hidden;
    border: 1px solid #05141f;
    input {
      width: 100%;
      height: 100%;
      border: none;
      background: #fff;
      border-radius: 24rem;
      padding: 14rem 90rem 14rem 20rem;
    }

    .send-item {
      display: flex;
      align-items: center;
      position: absolute;
      top: 6rem;
      right: 6rem;
      .clear {
        //display: none;
        justify-content: center;
        align-items: center;
        background: #ccd0d3;
        width: 24rem;
        height: 24rem;
        border-radius: 50%;
        margin-right: 10rem;
      }
      .send {
        &.isActive {
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
`;

const BasicSkin = css``;

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
