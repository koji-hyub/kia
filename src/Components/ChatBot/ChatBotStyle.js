import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  margin-bottom: 24rem;
  display: flex;
  max-width: 80%;
  .icon {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-radius: 50%;
    padding: 7rem 7rem;
    width: 32rem;
    height: 32rem;
    background: var(--Primary-Polar-White);
    overflow: hidden;
    &.bot {
      position: relative;
      .img {
        width: 56rem;
        height: 56rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 56rem;
          height: auto;
        }
      }
    }
   
  }
    .item {
        margin-left: 8rem;
        padding: 6rem 0 6rem;
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
