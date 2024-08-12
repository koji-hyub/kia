import styled, { css } from 'styled-components';

const CommonSkin = css``;
const BasicSkin = css`
  .tab {
    ul {
      display: flex;
      justify-content: space-between;

      li {
        width: 100%;
        button {
          display: block;
          width: 100%;
          padding: 10rem;
          background: #ececec;
          color: #666;
          font-size: 14rem;
        }
        &.isActive {
          button {
            background: #383838;
            color: #fff;
          }
        }
      }
    }
  }

  .tab-content {
    border-top: 1rem solid #383838;
    .content {
      background: #ececec;
      padding: 10rem;
      font-size: 14rem;
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
