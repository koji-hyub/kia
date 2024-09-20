import styled, { css, keyframes } from 'styled-components';

// 공통 스타일
const CommonSkin = css`
  color: var(--Grey-Spectrum-Coll-Grey-40, #9ba2a9);

  /* Body/B5 */
  font-size: var(--font-size-5, 14rem);
  font-style: normal;
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-4, 20rem); /* 142.857% */
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
