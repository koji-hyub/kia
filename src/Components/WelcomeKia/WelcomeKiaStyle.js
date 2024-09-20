import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  //text-align: center;
  margin-bottom: 40rem;

  .img-box {
    margin: 0 auto;
    border-radius: 10rem;
    overflow: hidden;
    background: #000;
    width: 100rem;
    height: 100rem;
    text-align: center;
    img {
      height: 100%;
    }
  }
  .welcome-text {
    margin-top: 16rem;
    justify-content: center;
    text-align: center;
    strong {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-bold);
      color: var(--Primary-Midnight-Black);
      line-height: var(--line-height-2, 28rem); /* 155.556% */
    }
    & > div {
      line-height: var(--line-height-2);
    }
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
