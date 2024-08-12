import styled, { css } from 'styled-components';

const CommonSkin = css`
  margin-top: 6rem;
  color: #ccd0d3;
  text-align: ${(props) => {
    switch (props.align) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'center':
        return 'center';
      default:
        return 'left';
    }
  }};
  > div {
    display: block;
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
