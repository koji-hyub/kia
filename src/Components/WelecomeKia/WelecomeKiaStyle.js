import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  text-align: center;

  .lottie-wrap {
    margin: 0 auto;
    border-radius: 10rem;
    overflow: hidden;
    background: #000;
    width: 100rem;
    height: 100rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    img {
      height: 100%;
    }
  }
  .welcome-text {
    margin-top: 16rem;
    justify-content: center;
    font-size: 18rem;
    text-align: center;
  }
  .small-text {
    justify-content: center;
    margin-top: 2rem;
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
