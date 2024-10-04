import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  ul {
    li {
      position: relative;
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: '';
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background: var(--Grey-Spectrum-Coll-Grey-60);
        margin: 7rem 5rem;
      }

      padding-left: 15rem;

      color: var(--Grey-Spectrum-Coll-Grey-60, #636b74);
      font-size: var(--font-size-7, 12rem);
      font-style: normal;
      font-weight: var(--font-weight-regular, 400);
      line-height: var(--line-height-8, 18rem); /* 150% */
      word-break: break-all;

      margin-bottom: 4rem;
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
