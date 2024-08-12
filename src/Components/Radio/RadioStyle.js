import styled, { css } from 'styled-components';

import IconRadioButton from '../../assets/images/common/IconRadioButton.svg';

const CommonSkin = css``;
const BasicSkin = css`
  margin-bottom: 16rem;
  margin-right: 16rem;

  & + label:first-of-type {
    margin-left: 0;
  }
  & + label {
  }
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 14px;
    color: #222;
  }
  &:first-of-type {
    margin-left: 0;
  }
  input[type='radio'] {
    margin: 0 8rem 0 0;
    padding: 0;
    appearance: none;
    border: 1px solid #e8e8e8;
    width: 25rem;
    height: 24rem;
    border-radius: 12rem;
    transition: border-color 0.3s ease, background 0.3s ease;
    &:hover {
      border-color: #9c9c9c;
      background: #f8f8f8;
    }
    &:checked {
      background: url(${IconRadioButton}) no-repeat;
      background-size: cover;
      border: none;
    }
    &:disabled {
      background-color: #f8f8f8;
      border: 1rem solid #e8e8e8;
    }
    &:checked:disabled {
      border: none;
    }
    &:disabled + span {
      opacity: 0.5;
    }
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
