import styled, { css } from 'styled-components';
import IconCheckBox from '~/assets/images/common/IconCheckBox.svg';

const CommonSkin = css``;
const BasicSkin = css`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16rem;
  margin-right: 16rem;
  & + label:first-of-type {
    //margin-left: 0;
  }
  &:first-of-type {
    //margin-left: 0;
  }
  & + label {
  }
  input[type='checkbox'] {
    width: ${(props) => (props.size === 'large' ? '35rem' : '24rem')};
    height: ${(props) => (props.size === 'large' ? '35rem' : '24rem')};
  }
  span {
    font-size: 14px;
    color: #222;
  }

  input[type='checkbox'] {
    margin: 0 8rem 0 0;
    padding: 0;
    appearance: none;
    border: 1px solid #e8e8e8;
    border-radius: 4rem;
    background: #fff;
    transition: border-color 0.3s ease, background 0.3s ease;
    &:hover {
      border-color: #9c9c9c;
      background: #f8f8f8;
    }
    &:checked {
      background: url(${IconCheckBox}) no-repeat;
      background-size: cover;
      border: 0;
    }
    &:disabled {
      // 기존 disabled 스타일
      background-color: #f8f8f8;
      border: 1rem solid #e8e8e8;
      // 추가적으로 체크된(disabled) 상태일 때의 스타일
      &:checked {
        fill: rgba(0, 0, 0, 0.5);
        background-size: cover;
        border: none;
      }
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
      return styled.label`
        ${CommonSkin} ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.label`
        ${CommonSkin} ${ThemeSkin}
      `;
    default:
      return styled.label`
        ${CommonSkin} ${BasicSkin}
      `;
  }
};

export default Style;
