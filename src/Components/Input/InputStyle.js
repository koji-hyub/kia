import React from 'react';
import styled, { css } from 'styled-components';

/* 인풋 리셋 */
const CommonSkin = css`
  label {
    font-size: var(--font-size-7, 12px);
  }
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
        &.clear {
          border: 1px solid red;
          border-radius: 50%;
          background: #ccd0d3;
        }
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
      height: 40px;
      padding: 10rem 16rem;

      border-radius: 4rem;
      border: 1rem solid var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);
      background: var(--Primary-Polar-White, #fff);
      font-size: var(--font-size-5, 14rem);
      background: #fff;
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

  // 텍스트 박스
  .input-text {
    textarea {
      font-size: var(--font-size-5, 14px);
      resize: none;
      width: 100%;
      height: 118rem;
      padding: 12rem 16rem;
      border-radius: 4rem;
      border: 1px solid var(--Grey-Spectrum-Coll-Grey-20, #ccd0d3);

      &:focus {
        border-color: #000;
      }
    }
  }
`;

const BasicSkin = css``;
const ThemeSkin = css``;

// 컴포넌트를 선택하는 함수
const Style = (type) => {
  switch (type) {
    case 'BasicSkin':
      return styled.div`
        ${CommonSkin}
        ${BasicSkin}
      `;
    case 'ThemeSkin':
      return styled.div`
        ${CommonSkin}
        ${ThemeSkin}
      `;
    default:
      return styled.div`
        ${CommonSkin}
        ${BasicSkin}
      `;
  }
};

export default Style;
