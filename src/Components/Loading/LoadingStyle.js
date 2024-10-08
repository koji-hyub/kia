import styled, { css, keyframes } from 'styled-components';

// 애니메이션 정의
const loadingAnimation = keyframes`
    0% {
        transform: rotate(0deg); /* 처음 상태 */
    }
    100% {
        transform: rotate(360deg); /* 끝 상태 */
    }
`;
// 공통 스타일
const CommonSkin = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    border: 3px solid var(--Primary-Midnight-Black);
    border-top: 3px solid transparent;
    border-radius: 50%; /* 원형 */
    width: 24rem; /* 로딩 링의 너비 */
    height: 24rem; /* 로딩 링의 높이 */
    animation: ${loadingAnimation} 1.5s linear infinite;
  }
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
