import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css``;

/* 인풋 리셋 */
const BasicSkin = css`
  .input {
    position: relative;
    .remote-item {
      position: absolute;
      top: 50%;
      right: 12rem;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      .btn {
        height: 20rem;
        width: 20rem;
        display: flex;
        align-items: center;
        svg {
          height: 100%;
          width: 100%;
        }
        & + .btn {
          margin-left: 5rem;
        }
        &.error {
          color: #de1818;
        }
      }
      .error-icon {
        height: 20rem;
        width: 20rem;
        align-items: center;
        color: #de1818;
        margin-left: 4rem;
      }
      .certification-num {
        color: #de1818;
        margin-left: 8rem;
        /* Body/Body_02 */
        font-size: 14rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 19.6px */
      }
    }
    input[type='password'],
    input[type='number'],
    input[type='text'] {
      width: 100%;
      height: 44px;
      padding: 12px;
      border-radius: 5px;
      border: 1px solid #e8e8e8;
      background: #f8f8f8;
      transition: all 0.3s;
      &:focus {
        border-color: #000;
      }
      &.error {
        border-color: #de1818;
        background: #fff;
        color: #de1818;
      }
      &.isTrue {
        border-color: transparent;
        color: blue;
      }
    }
  }
  .error-txt {
    color: #de1818;
    margin-top: 4rem;
    font-size: 12rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 16.8px */
  }

  //인풋 텍스트 박스
  .input-text {
    textarea {
      width: 100%;
      height: 200rem;
      padding: 12rem;
      align-items: center;
      border-radius: 4rem;
      border: 1px solid #e8e8e8;
      background: #f8f8f8;
      resize: none;
      transition: all 0.3s;
      &:focus {
        border-color: #000;
      }
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
