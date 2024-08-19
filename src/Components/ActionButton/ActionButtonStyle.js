import styled, { css } from 'styled-components';

const CommonSkin = css`
  display: block;
  cursor: pointer;
  position: relative; /* 부모 요소가 기준이 되도록 설정 */
  width: 24rem;
  height: 24rem; /* 전체 높이 설정 */
  color: var(--Primary-Midnight-Black);
  /* 공통 스타일 정의 */

  svg {
    transition: all 0.3s ease-in-out;
    //transform: rotate(405deg);
  }
  &.isActive {
    svg {
      transform: rotate(225deg);
    }
  }
`;

// 햄버거 메뉴 스타일 정의
const BasicSkin = css`
  //background: red;

  //padding: 6rem 4rem;
`;

// 다른 스킨 스타일 정의 (필요시 추가)
const ThemeSkin = css`
  /* 추가 테마 스타일 정의 */
`;

// 컴포넌트를 선택하는 함수
const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.button`
        ${CommonSkin}
        ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.button`
        ${CommonSkin}
        ${ThemeSkin}
      `;
    default:
      return styled.button`
        ${CommonSkin}
        ${BasicSkin}
      `;
  }
};

export default Style;
