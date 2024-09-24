import styled, { css } from 'styled-components';

const CommonSkin = css`
  width: 126rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16rem;
  margin: 24rem auto 24rem;
  background: var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
  padding: 2rem 12rem;
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
