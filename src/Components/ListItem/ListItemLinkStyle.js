import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  margin: 16rem 0 16rem;

  a {
    width: 100%;
    display: flex;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &:hover {
      border-radius: 4px;
      background: var(--Color-Spectrum-Neon-Green-Neon-Green-10, #f1f8e9);
    }
    .title {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
    }

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
    .sub-txt {
      color: var(--Grey-Spectrum-Coll-Grey-60, #636b74);
      /* Body/B7 */
      margin-top: 6rem;
      font-size: var(--font-size-7, 12rem);
      font-weight: var(--font-weight-regular, 400);
      line-height: var(--line-height-8, 18rem); /* 150% */
      width: 100%;
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
