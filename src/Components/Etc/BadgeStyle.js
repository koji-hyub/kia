import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: inline-flex;
  align-items: center;
  font-size: 12rem;
  font-weight: 700;
  border-radius: 4rem;
  padding: 3rem 8rem 1rem;
  margin-right: 4rem;
  &:last-of-type {
    margin-right: 0;
  }
`;

const BasicSkin = css`
  &.large01 {
    display: flex;
    padding: 8rem 16rem;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    background: #9c9c9c;
    color: #fff;
    text-align: center;
    font-size: 14rem;
    font-weight: 400;
  }
  &.badge01 {
    color: #669aff;
    background: rgba(0, 74, 178, 0.2);
  }
  &.badge02 {
    color: #9c9c9c;
    background: #e8e8e8;
  }
`;

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
