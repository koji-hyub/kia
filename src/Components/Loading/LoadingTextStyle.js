import styled, { css, keyframes } from 'styled-components';

// 공통 스타일
const CommonSkin = css`
  margin: 24rem 0 24rem;
  display: flex;
  align-items: center;

  color: var(--Grey-Spectrum-Coll-Grey-40, #9ba2a9);
  font-size: var(--font-size-5, 14px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-4, 20px); /* 142.857% */
  .icon-box {
    margin-right: 8rem;
    .icon {
      display: flex;
      align-items: center;
      //display: block;
      box-sizing: border-box;
      border-radius: 50%;
      padding: 7rem 7rem;
      width: 32rem;
      height: 32rem;
      overflow: hidden;
      &.bot {
        position: relative;
        background: var(--Primary-Midnight-Black);
        .img {
          width: 34rem;
          height: 34rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          img {
            width: 34rem;
            height: auto;
          }
        }
      }
    }
  }
`;

// 기본 스킨 스타일 정의
const BasicSkin = css``;

// 테마 스킨 스타일 정의
const ThemeSkin = css``;

// 스타일 컴포넌트를 선택하는 함수
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
