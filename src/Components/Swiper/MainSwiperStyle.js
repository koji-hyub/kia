import styled, { css } from 'styled-components';

const CommonSkin = css`
  //height: 530rem;
  //background: #383838;
  color: #fff;
  position: relative;
  //border: 1px solid red;
  margin: 0 -20px 0;

  .swiper {
    height: 100%;
    padding: 0 20rem 40rem;
    box-sizing: border-box;
    .swiper-slide {
      margin: 0;
      width: 300rem;
      padding: 16rem;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 12rem;
      border-radius: 8rem;
      background: var(--Primary-Polar-White, #fff);
      box-shadow: 4rem 4rem 10rem 0 rgba(5, 20, 31, 0.08);
    }
  }

  .swiper-pagination {
    .swiper-pagination-bullet {
      height: 8rem;
      width: 8rem;
      background: var(--Primary-Polar-White);
      opacity: 1;

      &.swiper-pagination-bullet-active {
        background: var(--Primary-Midnight-Black);
        width: 16rem;
        //height: 8rem;
        border-radius: 5.333rem;
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
