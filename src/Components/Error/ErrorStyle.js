import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: var(--Primary-Midnight-Black, #05141f);
      text-align: center;

      font-size: var(--font-size-3, 18px);
      font-style: normal;
      font-weight: var(--font-weight-bold, 600);
      line-height: var(--line-height-2, 28px); /* 155.556% */
    }
    .txt {
      color: var(--Grey-Spectrum-Coll-Grey-50, #828a90);
      text-align: center;
      font-size: var(--font-size-5, 14px);
      font-style: normal;
      font-weight: var(--font-weight-regular, 400);
      line-height: var(--line-height-4, 20px); /* 142.857% */
    }

    .secondary {
      margin-top: 24rem;
      width: 260rem;
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
