import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css`
  .inner {
  }
  /* 미디어 쿼리 정의 */
`;

const BasicSkin = css`
  .txt-l {
    text-align: left !important;
  }
  .txt-c {
    text-align: center !important;
  }
  .txt-r {
    text-align: right !important;
  }
  //width: 1280rem;

  margin: 0rem auto;
  > table {
    width: 100%;
    border-top: 2rem solid #000;
    margin: 0 auto;
    border-collapse: collapse; /* 테이블 셀 사이의 간격을 없애고, 테두리를 겹치도록 설정합니다. */
    width: 100%;
    thead {
      tr {
        th {
          height: 40px;
          padding: 9rem 24rem;
          color: #000;
          font-size: 16rem;
          font-weight: 400;
          line-height: 140%; /* 22.4px */
          letter-spacing: -0.24rem;
          border-bottom: 1px solid #e1e1e1;
          background: #f8f8f8;
          word-break: break-all;
          label {
            margin: 0;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          word-break: break-all;
          height: 40rem;
          padding: 9rem 24rem;
          color: #000;
          text-align: center;
          font-size: 14rem;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 19.6px */
          letter-spacing: -0.21rem;
          border-bottom: 1px solid #e1e1e1;
          label {
            margin: 0;
          }
          .icon-text {
            display: flex;
            align-self: center;
            justify-self: center;
            span {
              color: #9c9c9c;
              margin-right: 4rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1279px) {
    &.table-scroll {
      overflow-x: auto;
      table {
        th {
          word-break: keep-all;
        }
        td {
          word-break: keep-all;
        }
      }
    }
    width: 100%;
    > table {
      width: 100%;
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
