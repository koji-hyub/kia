import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  margin: 16rem 0 16rem;
  ul {
    li {
      &:first-child {
        margin-top: 0;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 4rem;
      .label {
        color: var(--Primary-Midnight-Black, #05141f);

        /* Title/T11 */
        font-size: var(--font-size-7, 12rem);
        font-weight: var(--font-weight-bold, 600);
        line-height: var(--line-height-4, 20rem); /* 166.667% */
      }
      .value {
        color: var(--Primary-Midnight-Black, #05141f);

        /* Title/T11 */
        font-size: var(--font-size-7, 12rem);
        line-height: var(--line-height-4, 20rem); /* 166.667% */
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
