// HamburgerMenuStyle.js
import styled, { css } from 'styled-components';

// 공통 스타일 (추가할 스타일이 있을 경우 여기에 정의)
const CommonSkin = css`
  /* 공통 스타일 정의 */
`;

// 햄버거 메뉴 스타일 정의
const BasicSkin = css`
  //background: red;
  display: block;
  cursor: pointer;
  position: relative; /* 부모 요소가 기준이 되도록 설정 */
  width: 24rem;
  height: 24rem; /* 전체 높이 설정 */
  padding: 6rem 4rem;

  div {
    width: 18rem;
    height: 2rem;
    background-color: #333;
    transition: transform 0.3s ease, opacity 0.3s ease; /* 애니메이션 부드럽게 하기 위한 기본 설정 */
    position: absolute; /* 부모 요소를 기준으로 절대 위치 설정 */
    left: 50%;
    transform: translateX(-50%); /* 수평 중앙 정렬 */

    /* 기본 상태 */
    &:nth-child(1) {
      top: calc(50% - 6rem); /* 상단 라인을 중앙으로 위치 조정 */
    }
    &:nth-child(2) {
      top: 50%; /* 중간 라인 중앙 정렬 */
      transform: translateX(-50%); /* 수평 중앙 정렬 */
    }
    &:nth-child(3) {
      top: calc(50% + 6rem); /* 하단 라인을 중앙으로 위치 조정 */
    }
  }

  /* 메뉴가 활성화 되었을 때 애니메이션 적용 */
  &.isActive {
    div:nth-child(1) {
      top: 50%; /* 상단 라인 중앙으로 위치 조정 */
      transform: translateX(-50%) rotate(45deg); /* 회전 */
    }
    div:nth-child(2) {
      top: 50%; /* 중간 라인 중앙으로 위치 조정 */
      opacity: 0; /* 숨기기 */
    }
    div:nth-child(3) {
      top: 50%; /* 하단 라인 중앙으로 위치 조정 */
      transform: translateX(-50%) rotate(-45deg); /* 회전 */
    }
  }
`;

// 다른 스킨 스타일 정의 (필요시 추가)
const ThemeSkin = css`
  /* 추가 테마 스타일 정의 */
`;

// 컴포넌트를 선택하는 함수
const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.button`
        ${CommonSkin}
        ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.button`
        ${CommonSkin}
        ${ThemeSkin}
      `;
    default:
      return styled.button`
        ${CommonSkin}
        ${BasicSkin}
      `;
  }
};

export default Style;
