import styled, { css } from 'styled-components';

const CommonSkin = css`
  position: relative;
  margin: 14rem -20px 24rem;
  .swiper {
    height: 100%;
    padding: 0 20rem 40rem;
    box-sizing: border-box;
    .swiper-slide {
      margin: 0;
      width: 280rem;
      padding: 16rem;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 12rem;
      border-radius: 8rem;
      background: var(--Primary-Polar-White, #fff);
      box-shadow: 4rem 4rem 10rem 0 rgba(5, 20, 31, 0.08);

      h3 {
        margin-bottom: 8rem;
      }
      .item {
        margin-bottom: 12rem;
      }
      .btn-area {
        display: flex;

        button {
          width: 100%;
        }
      }
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
  .swiper-button-disabled {
    opacity: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 45%;
    display: flex;
    width: 32px;
    height: 32px;
    padding: 8px 7px 8px 9px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    border: 1px solid var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
    background: var(--Primary-Polar-White, #fff);
    &.swiper-button-prev:after,
    &.swiper-button-next:after {
      font-size: 12rem;
      color: var(--Primary-Midnight-Black);
    }

    /* Below Low */
    box-shadow: 4px 4px 10px 0px rgba(5, 20, 31, 0.08);
  }
  .swiper-button-prev {
    padding-left: 5rem;
  }

  //***********************************//
  //*********** 커스텀 스와이프 ***********//
  //***********************************//
  // 리스트 아이템
  .list-item {
    .title-item {
      padding-bottom: 12rem;
      margin-bottom: 12rem;
      border-bottom: 1rem solid var(--Grey-Spectrum-Coll-Grey-20);
    }
    .item-box {
      .item {
        margin: 0;
        li {
          a {
            display: flex;
            align-items: flex-start;
            color: var(--Color-Spectrum-Neon-Green-Neon-Green-100, #0f2009);
            padding: 8rem;
            font-size: var(--font-size-7, 12rem);
            font-style: normal;
            font-weight: var(--font-weight-regular, 400);
            line-height: var(--line-height-8, 18rem); /* 150% */

            &:hover {
              border-radius: 4rem;
              background: var(--Color-Spectrum-Neon-Green-Neon-Green-10, #f1f8e9);
            }
            .num {
              margin-right: 4rem;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 18rem;
              height: 18rem;
              padding: 2rem 3rem;
              border-radius: 50%;
              color: var(--Primary-Polar-White);
              background: var(--Primary-Midnight-Black, #05141f);

              /* Title/T14 */
              font-size: var(--font-size-9);
              font-weight: var(--font-weight-bold, 600);
              line-height: var(--line-height-6, 14px); /* 155.556% */
            }
            .text {
              width: calc(100% - 22rem);
            }
          }
        }
      }
      .more-btn {
        margin-top: 16rem;
        width: 100%;
        svg {
          transform: rotate(90deg);
        }
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
