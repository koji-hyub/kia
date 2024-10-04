import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  border-radius: 4rem;
  border: 1rem solid var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);

  /* Body/B7 */

  padding: 8rem 12rem 8rem;
  .info {
    &:before {
      display: block;
      content: '※';
      margin-right: 2rem;
    }
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    word-break: break-all;
    color: var(--Grey-Spectrum-Coll-Grey-60, #636b74);
    font-size: var(--font-size-7, 12rem);
    font-style: normal;
    font-weight: var(--font-weight-regular, 400);
    line-height: var(--line-height-8, 18rem); /* 150% */
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
