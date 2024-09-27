import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  margin-bottom: 24rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    //margin-right: 8rem;
    box-sizing: border-box;
    border-radius: 50%;
    padding: 7rem 7rem;
    width: 32rem;
    height: 32rem;
    overflow: hidden;
    background: var(--Primary-Polar-White);
  }
  .item {
    padding: 6rem 0 6rem 8rem;
    width: calc(100% - 40rem);
    line-height: var(--line-height-4, 20rem); /* 142.857% */
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
