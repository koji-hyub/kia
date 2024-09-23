import styled, { css } from 'styled-components';
// import { IconArrow } from '~/assets/images/common/IconSet';
const CommonSkin = css``;
const BasicSkin = css`
  width: 100%;
  height: 44rem;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  background: #f8f8f8;
  .styled-combo {
    width: 100%;
    border-radius: 4rem;
    position: relative;
    .icon-arrow {
      width: 20rem;
      height: 20rem;
      svg {
        transform: rotate(90deg); /*; transition: all .5s;*/
      }
    }
    & + .styled-combo {
      margin-top: 20rem;
    }
    &.isActive {
      .icon-arrow {
        svg {
          transform: rotate(-90deg);
        }
      }
      .custom-select-box {
        ul {
          display: block;
          li {
            display: block;
            width: 100%;
          }
        }
        display: block;
        position: absolute;
        top: 42rem;
        left: 0;
        right: 0;
        z-index: 1;
      }
    }

    .combo-title {
      font-size: 14rem;
      padding: 10rem 10rem 10rem 10rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #707070;
      //&.isActive {
      //
      //}
    }
    .custom-select-box {
      //display: none;
      max-height: 148rem;
      overflow-y: auto;
      border-radius: 4px;
      border: 1px solid #9c9c9c;
      background: #fff;
      box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
      padding: 4rem;
      ul {
        overflow: hidden;
        li {
          padding: 12rem;
          height: 44rem;
          font-size: 14rem;
          background: #fff;
          transition: all 0.3s;
          &:first-of-type {
            border-top: 0;
          }
          &:hover {
            border-radius: 4px;
            background: #eff3f9;
          }
        }
      }
    }
  }
  &.bottom {
    .styled-combo {
      .custom-select-box {
        display: block;
        position: absolute;
        top: unset;
        bottom: 42rem;
        left: 0;
        right: 0;
        z-index: 1;
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
