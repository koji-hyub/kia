import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background: var(--Primary-Polar-White);
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.small {
    width: 10rem;
    height: 10rem;
  }
  &.large {
    width: 24rem;
    height: 24rem;
  }
`;

// 버튼 타입 스킨 1
const BasicSkin = css``;

// 버튼 타입 스킨 2
const ThemeSkin = css``;

// 컴포넌트를 선택하는 함수
const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.button`
        ${CommonSkin} ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.button`
        ${CommonSkin} ${ThemeSkin}
      `;
    default:
      return styled.button`
        ${CommonSkin} ${BasicSkin}
      `;
  }
};

export default Style;
