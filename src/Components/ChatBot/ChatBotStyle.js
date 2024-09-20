import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: flex;
  //max-width: 80%;
  & + .chat-bot {
    margin-top: 24rem;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    border-radius: 50%;
    padding: 7rem 7rem;
    width: 32rem;
    height: 32rem;
    overflow: hidden;
    position: relative;
    background: var(--Primary-Midnight-Black);
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

  .item {
    margin-left: 8rem;

    .text {
      margin: 7rem 0 6rem;
      color: var(--Primary-Midnight-Black, #05141f);
      font-size: var(--font-size-5, 14rem);
      font-style: normal;
      font-weight: var(--font-weight-regular, 400);
      line-height: var(--line-height-4, 20rem); /* 142.857% */
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
