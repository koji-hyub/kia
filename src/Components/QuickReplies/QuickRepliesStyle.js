import styled, { css } from 'styled-components';
import TextStyle from '../Text/TextStyle';

const CommonSkin = css`
  border-radius: 20rem;
  border: 1rem solid var(--Primary-Midnight-Black);
  background: var(--Primary-Polar-White, #fff);
  box-shadow: 4rem 4rem 10rem 0 rgba(5, 20, 31, 0.08);
  &:first-of-type {
    margin-left: 0;
  }
  & + button {
    margin-left: 8rem;
  }
`;
const BasicSkin = css`
  background: var(--Primary-Polar-White);
  display: inline-flex;
  padding: 6rem 12rem;
  justify-content: center;
  align-items: center;
  line-height: var(--line-height-8); /* 150% */
  font-weight: ${(props) => `var(${props.bold || '--font-weight-regular'})`};
  font-size: ${(props) => `var(${props.size || '--font-size-7'})`};
  color: ${(props) => `var(${props.color || '--Primary-Midnight-Black'})`};
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
