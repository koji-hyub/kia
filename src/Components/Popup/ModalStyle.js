import styled, { css } from 'styled-components';

// 공통 스타일 정의
const CommonSkin = css`
  // 딤
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;

  z-index: 1000;
  overflow: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
  > .inner {
    height: 0; /* 초기 높이 */
    box-sizing: border-box;
    background: #fff;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, height 0.3s ease-in-out; /* 트랜지션 애니메이션 settimeout의 일치시킨다. */

    //센터 팝업 초기 위치
  }

  &.isActive {
    display: flex;
    visibility: visible; /* 보이도록 설정 */
    opacity: 1; /* 불투명하도록 설정 */

    > .inner {
      height: auto; /* 높이를 자동으로 설정하여 콘텐츠가 보이도록 설정 */
    }
  }

  &.popup-top {
    justify-content: flex-start;
  }

  &.popup-center {
    justify-content: center;
    > .inner {
      width: 80%;
      margin: 0 auto;
      transform: translateY(-10px); /* 초기 위치를 화면 위로 설정 */
    }
  }
  &.popup-bottom {
    justify-content: flex-end;
  }

  &.popup-pull {
    justify-content: flex-end;
  }
`;

const BasicSkin = css`
  /* 추가적인 BasicSkin 스타일이 여기에 들어갈 수 있습니다. */
`;

const ThemeSkin = css`
  /* 추가적인 ThemeSkin 스타일이 여기에 들어갈 수 있습니다. */
`;

const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.div`
        ${CommonSkin}
        ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.div`
        ${CommonSkin}
        ${ThemeSkin}
      `;
    default:
      return styled.div`
        ${CommonSkin}
        ${BasicSkin}
      `;
  }
};

export default Style;
