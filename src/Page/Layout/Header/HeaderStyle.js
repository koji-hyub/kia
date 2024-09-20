import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  //z-index: 10; /* 헤더가 다른 요소 위에 표시되도록 함 */
  //background-color: var(--Primary-Midnight-Black); /* 헤더 배경 색상 설정 */
  //background: var(--Primary-Polar-White, #fff);
  //color: var(--Primary-Polar-White); /* 헤더 텍스트 색상 설정 */
  background: #010e18;
  background: var(--Primary-Polar-White, #fff);
  height: 56rem;
  /* 기타 필요 스타일 */
  .inner {
    padding: 16rem 20rem;
    height: 56rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item-set {
      > button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        & + button {
          margin-left: 20rem;
        }
        width: 20rem;
        height: 20rem;
        color: var(--Primary-Polar-White);
      }

      .toggle-popup {
        display: flex;
        width: 102rem;
        z-index: 100;
        align-items: center;
        position: fixed;
        right: 8rem;
        top: 46rem;
        border-radius: 4rem;
        background: var(--Primary-Polar-White, #fff);
        border: 1rem solid var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
        li {
          &:first-of-type {
            border-bottom: 1rem solid var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
          }

          button {
            &:hover {
              font-weight: var(--font-weight-bold, 600);
              background: var(--Grey-Spectrum-Coll-Grey-02, #f2f4f6);
            }
            width: 100%;
            text-align: left;
            color: var(--Primary-Midnight-Black, #05141f);
            font-size: var(--font-size-5, 14rem);
            padding: 12rem 16rem;
            line-height: var(--line-height-4, 20rem); /* 142.857% */
            white-space: nowrap;
          }
        }
      }
    }
  }
`;

const BasicSkin = css``;

const ThemeSkin = css`
  background: ${(props) => `var(${props.color || '--Primary-Polar-White'})`};
`;

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
