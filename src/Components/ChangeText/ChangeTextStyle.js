import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  position: relative;
  display: flex;
  justify-content: center;
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--Grey-Spectrum-Coll-Grey-10, #e7e9ec);
    transform: translateY(-50%);
  }
  .text {
    position: relative; /* 부모 컨테이너에서 상대적인 위치 설정 */
    display: inline-block; /* 텍스트가 그 너비만큼 공간을 차지하도록 설정 */
    margin: 25rem 0;
    padding: 0 8rem;
    background: var(--Grey-Spectrum-Coll-Grey-05);
    z-index: 10; /* 텍스트가 라인 위에 위치하도록 z-index 설정 */
    width: auto;
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
