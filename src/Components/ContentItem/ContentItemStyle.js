import styled, { css } from 'styled-components';

const CommonSkin = css`
  margin: 0;
  width: 280rem;
  padding: 16rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12rem;
  border-radius: 8rem;
  background: var(--Primary-Polar-White, #fff);
  box-shadow: 4rem 4rem 10rem 0 rgba(5, 20, 31, 0.08);
  h3 {
    margin-bottom: 4rem;
  }
  .btn-area {
    margin-top: 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      &:nth-child(1) {
        //flex: 0 0 80rem; /* 첫 번째 버튼 고정 크기 */
        min-width: auto;
        width: 80rem;
      }

      &:nth-child(2) {
        //flex: 1; /* 두 번째 버튼은 남은 공간을 차지 */
        //min-width: 0; /* 최소 너비는 0으로 설정 */
        width: calc(100% - 88rem);
      }
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
