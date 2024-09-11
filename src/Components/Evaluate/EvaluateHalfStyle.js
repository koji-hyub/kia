import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  .start-set {
    ul {
      display: inline-flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 24rem;
        height: 24rem;
        margin-right: 10rem;

        button {
          outline: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 24rem;
          height: 24rem;
          border: none;
          background: transparent;
          cursor: pointer;
          z-index: 1; // 버튼이 클릭 가능하도록 z-index를 조정

          &.half {
            width: 14.5rem;
            height: 27rem;
            overflow: hidden;
            z-index: 2; // 반별 버튼이 전체 버튼 위에 표시되도록
          }
        }

        // 별이 선택되었을 때의 스타일
        //&.isActive {
        //  .icon-left,
        //  .icon-right {
        //    fill: var(--Tertiary-Afternoon-Yellow);
        //    stroke: var(--Tertiary-Afternoon-Yellow);
        //  }
        //}
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
