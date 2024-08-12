import React from 'react';
import styled, { css } from 'styled-components';

const CommonSkin = css`
  @media (max-width: 1279px) {
    //게시판 디테일
  }
`;
const BasicSkin = css`
  &.side-menu {
    .top-title {
      margin-bottom: 17rem;
      h3 {
        color: #707070;
        font-size: 14rem;
        font-weight: 700;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.21px;
      }
    }
    .inner {
      .oneDepth {
        width: 100%;
        > li {
          a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 9rem 16rem;
            color: #707070;
            font-size: 14rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 19.6px */
            letter-spacing: -0.21rem;
            &.isActive {
              font-weight: 700;
              svg {
                transform: rotate(-90deg);
              }
            }
            svg {
              transform: rotate(90deg);
            }
          }
          ul {
            li {
              a {
                padding: 9rem 24rem;
                color: #707070;
                font-size: 14rem;
                font-style: normal;
                font-weight: 400;
                line-height: 140%; /* 19.6px */
                letter-spacing: -0.21rem;
                height: 38rem;
                &.isActive {
                  color: #003580;
                  background: #f8f8f8;
                  font-weight: 700;
                }
                &:hover {
                  color: #003580;
                  background: #f8f8f8;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1279px) {
    &.side-menu {
      z-index: 10;
      position: relative;
      .top-title {
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .open {
          color: #707070;
          svg {
            transform: rotate(-90deg);
          }
        }
        .closed {
          color: #707070;
          svg {
            transform: rotate(90deg);
          }
        }
      }
      .inner {
        position: absolute;
        top: 40rem;
        left: 0;
        right: 0;
        background: #fff;
        padding-bottom: 0 !important;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        .oneDepth {
          li {
            a {
              padding: 10rem 20rem;
            }
          }
        }
        //padding: 0 20rem;
      }
    }
  }
`;

const ThemeSkin = css``;

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
