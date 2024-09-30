import styled, { css } from 'styled-components';
import TextStyle from '../Text/TextStyle';

const CommonSkin = css`
  display: inline-flex;

  border-radius: 20rem;
  border: 1rem solid var(--Primary-Midnight-Black);
  background: var(--Primary-Polar-White, #fff);
  box-shadow: 4rem 4rem 10rem 0 rgba(5, 20, 31, 0.08);
  background: var(--Primary-Polar-White);
  padding: 6rem 12rem;
  justify-content: center;
  align-items: center;
  line-height: var(--line-height-8); /* 150% */
  font-weight: ${(props) => `var(${props.bold || '--font-weight-regular'})`};
  font-size: ${(props) => `var(${props.size || '--font-size-7'})`};
  color: ${(props) => `var(${props.color || '--Primary-Midnight-Black'})`};

  margin-bottom: 8rem;
  margin-right: 8rem;
  //& + a {
  //
  //}
`;

const BasicSkin = css``;
const ThemeSkin = css``;

const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.a`
        ${CommonSkin} ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.a`
        ${CommonSkin} ${ThemeSkin}
      `;
    default:
      return styled.a`
        ${CommonSkin} ${BasicSkin}
      `;
  }
};
export default Style;
