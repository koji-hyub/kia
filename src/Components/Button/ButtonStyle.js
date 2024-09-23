import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 120rem;
  border-radius: 4rem;
  &:first-of-type {
    margin-left: 0;
  }
  & + button {
    margin-left: 8rem;
  }
  .text {
    font-size: var(--font-size-5, 14rem);
    font-weight: var(--font-weight-bold, 600);
    line-height: var(--line-height-4, 20rem); /* 142.857% */
  }
  &.large {
    padding: 12rem;
    height: 44rem;
  }

  &.small {
    padding: 6rem 12rem;
    border: 1px solid red;
    height: 32rem;
    .text {
      font-size: var(--font-size-7, 12rem);
      font-weight: var(--font-weight-regular, 400);
      line-height: var(--line-height-4, 20px); /* 166.667% */
    }
  }

  &.primary {
    background: var(--Primary-Midnight-Black, #05141f);
    &:hover {
      background: var(--Grey-Spectrum-Coll-Grey-80, #303c47);
    }
    .text {
      color: var(--Primary-Polar-White, #fff);
    }
    &[disabled] {
      span {
        color: var(--Grey-Spectrum-Coll-Grey-30, #b2b8bd);
      }
      background: var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
    }
  }

  &.secondary {
    border: 1rem solid var(--Primary-Midnight-Black, #05141f);
    background: var(--Primary-Polar-White, #fff);
    &:hover {
      border: 1rem solid var(--Primary-Midnight-Black, #05141f);
      background: var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
    }
    .text {
      color: var(--Primary-Midnight-Black, #05141f);
    }
    &[disabled] {
      .text {
        color: var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
      }
      border: 1px solid var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
      background: var(--Primary-Polar-White, #fff);
    }
  }

  &.tertiary {
    background: var(--Primary-Polar-White, #fff);
    &:hover {
      background: var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
    }
    .text {
      color: var(--Primary-Midnight-Black, #05141f);
    }
    &[disabled] {
      .text {
        color: var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
      }
      background: var(--Primary-Polar-White, #fff);
    }
  }
  &.text {
    &:hover {
      background: var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
    }
    .text {
      color: var(--Grey-Spectrum-Coll-Grey-50, #828a90);
    }
    &[disabled] {
      .text {
        color: var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
      }
    }
  }

  &[disabled] {
    cursor: not-allowed;
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
