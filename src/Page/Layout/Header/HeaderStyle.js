import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; /* 헤더가 다른 요소 위에 표시되도록 함 */
  background-color: var(--Primary-Midnight-Black); /* 헤더 배경 색상 설정 */
  color: var(--Primary-Polar-White); /* 헤더 텍스트 색상 설정 */

  /* 기타 필요 스타일 */

  .inner {
    padding: 16rem 20rem;
    height: 56rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BasicSkin = css`
  height: 56rem;
  background: #010e18;
  //background: var(--Primary-Midnight-Black, #05141f);
  background: ${(props) => `var(${props.color || '--Primary-Midnight-Black, #05141f'})`};
  //color: var(--Primary-Polar-White);
  .inner {
    h1 {
      color: #fff;
      font-size: 16rem;
      svg {
        margin-top: 1rem;
        margin-right: 8rem;
        width: 60rem;
        height: 14rem;
      }
    }
    .item-set {
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        & + button {
          margin-left: 15rem;
        }
        width: 20rem;
        height: 20rem;
        color: var(--Primary-Polar-White);
      }
    }
  }
`;

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
