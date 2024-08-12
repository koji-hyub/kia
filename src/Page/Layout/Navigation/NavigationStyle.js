import styled, { css } from 'styled-components';
import IconClosed from '~/assets/images/temp/closed.svg';
import IconOpen from '~/assets/images/temp/open.svg';

// 공통으로 사용되는 스타일

const CommonSkin = css``;
const BasicSkin = css`
  .aside-menu {
    position: fixed;
    width: 160rem;
    top: 0;
    left: -160rem;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    padding: 20rem;
    z-index: 20;
    transition: left 0.3s;
    &.isActive {
      left: 0rem;
    }
    .open {
      width: 34rem;
      height: 34rem;
      position: absolute;
      right: -34rem;
      top: 70rem;
      background: rgba(0, 0, 0, 0.8) url('${IconOpen}') no-repeat center;
    }
    .closed {
      background: rgba(0, 0, 0, 0.8) url('${IconClosed}') no-repeat center;
    }

    .inner {
      overflow-y: auto;

      /* 스크롤바의 폭 너비 */
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.7); /* 스크롤바 색상 */
        border-radius: 10px; /* 스크롤바 둥근 테두리 */
      }
      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1); /*스크롤바 뒷 배경 색상*/
        border-radius: 10px;
      }

      ul {
        margin-bottom: 15rem;
        li {
          &:first-of-type {
            margin-left: 0;
          }
          &.isActive {
            a {
              color: #ffde00;
            }
          }
          a {
            color: #fff;
            white-space: nowrap;
            font-size: 14rem;
          }
          padding: 5rem;
        }
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
