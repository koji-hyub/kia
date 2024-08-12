import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

// 버튼 타입 스킨 1
const BasicSkin = css`
  &.round {
    &.confirm {
      background: #000;
      color: #fff;
    }
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    border-radius: 30px;
    border: 1px solid #e8e8e8;
    background: #fff;
    font-size: 14rem;
    font-style: normal;
    font-weight: 400;
  }
  svg {
    //margin-right: rem;
    margin-left: 5rem;
  }
  &[disabled] {
    color: #9c9c9c;
    background: #e8e8e8;
  }
  margin-left: ${(props) => (props.size === 'large' ? '0' : '5rem')};
  margin-bottom: ${(props) => (props.size === 'large' ? '5rem' : '')};
  padding: ${(props) =>
    props.size === 'large'
      ? '12rem 24rem'
      : props.size === 'medium'
      ? '12rem 20rem'
      : '10rem 20rem'};
  width: ${(props) =>
    props.size === 'large' ? '100%' : props.size === 'medium' ? 'auto' : 'auto'};
  height: ${(props) =>
    props.size === 'large' ? '52rem' : props.size === 'medium' ? '44rem' : 'auto'};
  background-color: ${(props) =>
    props.type === 'type01' ? '#003580' : props.type === 'type02' ? '#669AFF' : '#fff'};
  color: ${(props) =>
    props.type === 'type01' ? '#fff' : props.type === 'type02' ? '#fff' : '#000'};
  border: 1rem solid
    ${(props) =>
      props.type === 'type01' ? '#003580' : props.type === 'type02' ? '#669AFF' : '#E8E8E8'};
  border-radius: 4px;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    border: 1rem solid
      ${(props) =>
        props.type === 'type01' ? '#669AFF' : props.type === 'type02' ? '#0060E6' : '#9C9C9C'};
    background-color: ${(props) =>
      props.type === 'type01' ? '#669AFF' : props.type === 'type02' ? '#0060E6' : '#fff'};
    transition: border-color 0.3s ease, background 0.3s ease;
  }
  &:active {
    border: 1rem solid
      ${(props) =>
        props.type === 'type01' ? '#003580' : props.type === 'type02' ? '#669AFF' : '#000'};
    background-color: ${(props) =>
      props.type === 'type01' ? '#003580' : props.type === 'type02' ? '#669AFF' : '#fff'};
  }

  span {
    font-size: ${(props) =>
      props.size === 'large' ? '20rem' : props.size === 'medium' ? '14rem' : '14rem'};
  }

  ${(props) =>
    props.type !== 'type01' &&
    props.type !== 'type02' &&
    props.disabled &&
    css`
      color: #e8e8e8;
      pointer-events: none;
      border: 1rem solid #e8e8e8;
      background: #f8f8f8;
    `}

  ${(props) =>
    (props.type === 'type01' || props.type === 'type02') &&
    props.disabled &&
    css`
      background: #e8e8e8;
      border-color: #e8e8e8;
      color: #fff;
      pointer-events: none;
    `}
`;

// 버튼 타입 스킨 2
const ThemeSkin = css``;

// 컴포넌트를 선택하는 함수
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
