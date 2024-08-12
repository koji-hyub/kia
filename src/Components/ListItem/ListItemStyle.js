import styled, { css } from 'styled-components';

const CommonSkin = css``;
const BasicSkin = css`
  .bored-list-wrap {
    border-top: 2px solid #000;
    margin-top: 16rem;
    .bored-list {
      width: 100%;
      border-collapse: collapse;
      .th-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        background-color: #f2f2f2;
        font-weight: bold;
        div {
          text-align: center;
          padding: 10rem;
        }
      }
      .t-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        div {
          text-align: center;
          padding: 10rem;
          .text {
            text-align: left;
            display: flex;
            align-items: center;
            span {
              color: #9c9c9c;
              margin-right: 4rem;
            }
          }
        }
      }
    }
  }
  &.qna-wrap {
    .bored-list-wrap {
      .bored-list {
        .th-head {
        }
        .t-body {
          .no-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200rem;
          }
        }
        .t-num {
          width: 100rem;
        }
        .t-title {
          width: calc(100% - 490rem);
        }
        .t-name {
          width: 130rem;
        }
        .t-date {
          width: 130rem;
        }
        .t-state {
          width: 130rem;
        }
        .t-set {
          width: 130rem;
        }
        .t-count {
          width: 130rem;
        }
      }
    }
  }
  /* 미디어 쿼리 정의 */
  @media (max-width: 1279px) {
    .bored-list-wrap {
      margin-top: 16rem;

      .bored-list {
        .th-head {
          display: none;
        }

        .t-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          div {
            text-align: center;
            padding: 10rem;
            .text {
              text-align: left;
              display: flex;
              align-items: center;
              span {
                margin-right: 4rem;
              }
            }
          }
        }
      }
    }
    &.qna-wrap {
      .bored-list-wrap {
        .bored-list {
          .th-head {
          }
          .t-body {
            display: block;
            position: relative;
            .no-content {
            }
          }
          .t-num {
            //width: 100rem;
            display: none;
          }
          .t-title {
            padding: 0;
            width: 100%;

            .text {
              span {
                display: inline-flex;
                vertical-align: top;
              }
              width: 100%;
              display: block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 16rem;
              padding-right: 110rem;
            }
          }
          .t-name {
            display: inline-flex;
            width: auto;
            color: #707070;
            font-size: 12px;
            font-weight: 500;
            padding-top: 0;
          }
          .t-date {
            color: #707070;
            font-size: 12px;
            font-weight: 500;
            display: inline-flex;
            width: auto;
            padding-top: 0;
          }
          .t-state {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 100rem;
          }
          .t-set {
            display: none;
          }
          .t-count {
            display: none;
          }
        }
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
