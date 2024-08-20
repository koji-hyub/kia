import styled, { css } from 'styled-components';

// 공통으로 사용되는 스타일
const CommonSkin = css``;
const BasicSkin = css`
  .bottom-btn {
    margin-top: 40rem;
    text-align: right;

    button {
      width: 152rem;
      & + button {
        margin-left: 16rem;
      }
    }

    // 좌측 보더값 없는 버튼
    &.type02 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: auto;
        padding: 0 20rem;
        border: 0;
        font-style: normal;
        font-weight: 400;
        letter-spacing: -0.24rem;
        text-decoration: underline;
        margin: 0;
        span {
          font-size: 16rem;
        }
        & + button {
          width: 152rem;
          margin-left: 16rem;
          text-decoration: none;
          span {
            font-size: 20rem;
          }
        }
      }
    }
  }

  //동의
  .agreement-wrap {
    margin-top: 20rem;
    label {
      margin: 0;
      align-items: center;
    }

    .all-chk {
      padding: 8rem;
      border-radius: 8rem;
      background: #eff3f9;
      label {
        color: #000;
        font-weight: 700;
      }
    }
    .chk-item {
      ul {
        li {
          padding: 8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          button {
            border: 0;
            color: #707070;
            text-align: center;
            font-size: 16rem;
            text-decoration: underline;
            padding: 0;
          }
        }
      }
    }
  }

  //데이트 피커
  .react-datepicker {
    border-radius: 4rem;
    overflow: hidden;
  }

  .date-set {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      &:hover,
      &.isActive {
        border-color: #669aff;
        color: #669aff;
      }
    }

    button + .date-wrap {
      margin-left: 8rem;
    }
  }
  .date-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      display: flex;
      width: 162px;
      padding: 8rem 4rem 8rem 12rem;
      justify-content: space-between;
      align-items: center;
      border-radius: 4rem;
      border: 1rem solid #e8e8e8;
      background: #f8f8f8;
    }
    .date {
      position: relative;
      .icon {
        height: 16rem;
        color: #707070;
        position: absolute;
        top: 50%;
        right: 4rem;
        transform: translateY(-50%);
      }
    }
  }

  .space {
    text-align: center;
    margin: 0 8rem;
  }

  .react-datepicker__header {
    //width: 400rem;
    height: auto;
    //padding: 15rem 0 10rem;
    font-size: 12rem;
    .react-datepicker__current-month {
      display: flex;
      align-items: center;
      justify-content: center !important;
      font-size: 20rem;
      justify-content: space-between;
    }

    .react-datepicker__day-names {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: auto;
      padding: 10rem 0 10rem;
      > div {
        height: 25rem;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: unset;
      }
    }
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      font-size: 12rem;
      //width: 17rem;
    }
  }

  .react-datepicker__navigation {
    //top: 50%;
    //background: #000000;
    top: 5rem;
    .react-datepicker__navigation-icon--previous,
    .react-datepicker__navigation-icon--next {
      left: 0;
      right: 0;
      &.react-datepicker__navigation-icon,
      &.react-datepicker__navigation-icon {
        top: 5rem;
      }
    }
  }
  .react-datepicker__month {
    //margin: 4rem;
    //padding: 10rem;

    .react-datepicker__week {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .react-datepicker__day {
        flex: 1;
        justify-content: center;
      }
    }
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      width: 30rem;
      height: 30rem;
      font-size: 14rem;
      margin: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.react-datepicker__day--keyboard-selected,
      &.react-datepicker__day--selected {
        display: flex;
        align-items: center;
        //height: 25rem;
        border-radius: 2rem;
      }
    }
  }
  //데이트 피커 End
  @media (max-width: 1279px) {
    .bottom-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        flex: 1;
      }

      // 좌측 보더값 없는 버튼
      &.type02 {
        flex-direction: column-reverse;

        button {
          width: 100%;
          font-style: normal;
          font-weight: 400;
          letter-spacing: -0.24rem;
          text-decoration: underline;
          margin-bottom: 32rem;
          span {
            font-size: 16rem;
            padding: 12rem;
          }
          & + button {
            width: 100%;
            margin-left: 0rem;
            text-decoration: none;
            span {
              font-size: 20rem;
            }
          }
        }
      }
    }

    //데이트 피커
    .react-datepicker__navigation {
      //top: 50%;
      //background: #000000;
      width: 32rem !important;
      height: 32rem !important;
      margin: 0 !important;
      top: 2rem;
      .react-datepicker__navigation-icon--previous,
      .react-datepicker__navigation-icon--next {
        left: 0;
        right: 0;
        &.react-datepicker__navigation-icon,
        &.react-datepicker__navigation-icon {
          top: 5rem;
        }
      }
    }
    //데이트 피커 End
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
