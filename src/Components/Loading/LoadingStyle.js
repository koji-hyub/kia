import styled, { css, keyframes } from 'styled-components';

// 공통 스타일
const CommonSkin = css`
  padding: 8rem 0;
  display: flex;
  align-items: center;
`;

// 애니메이션 정의
const loadingAnimation = keyframes`
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
`;

// 기본 스킨 스타일 정의
const BasicSkin = css`
  div {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: #3478fe;
    animation: ${loadingAnimation} 1.5s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }

    & + div {
      margin-left: 4rem;
    }
  }
`;

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
