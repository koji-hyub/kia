import styled, { css } from 'styled-components';

const CommonSkin = css`
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
