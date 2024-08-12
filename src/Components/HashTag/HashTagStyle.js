import styled, { css } from 'styled-components';
import TextStyle from '../Text/TextStyle';

const CommonSkin = css``;
const BasicSkin = css`
  background: #383838;
  border: 1rem solid #f8f8f8;
  display: inline-flex;
  padding: 4rem 8rem;
  justify-content: center;
  align-items: center;
  border-radius: 8rem;
  font-size: 12rem;
  color: #aaa;
  &:before {
    content: '#';
  }
`;

const ThemeSkin = css``;

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
