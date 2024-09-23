import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: flex;
  //max-width: 80%;
  & + .chat-bot {
    margin-top: 24rem;
  }
  > .icon {
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

  > .item {
    margin-left: 8rem;
    > .text-box {
      width: 280rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .tooltip {
        margin-bottom: 6rem;
        position: relative;
        .text {
          z-index: 100;
          padding: 2rem 8rem;
          position: absolute;
          top: 32rem;
          right: 0;
          border-radius: 4rem;
          background: var(--Grey-Spectrum-Coll-Grey-80, #303c47);
          color: var(--Primary-Polar-White, #fff);
          font-size: var(--font-size-7, 12px);
          line-height: var(--line-height-8, 18rem); /* 150% */
          white-space: nowrap;
          &:before {
            position: absolute;
            top: -6rem;
            right: 8rem;
            display: block;
            content: '';
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 6px solid #303c47;
          }
        }
      }
      .refresh {
        margin-bottom: 6rem;
      }
      .text {
        margin: 7rem 0 6rem;
        color: var(--Primary-Midnight-Black, #05141f);
        font-size: var(--font-size-5, 14rem);
        font-style: normal;
        font-weight: var(--font-weight-regular, 400);
        line-height: var(--line-height-4, 20rem); /* 142.857% */
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
