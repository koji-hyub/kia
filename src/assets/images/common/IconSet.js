import React from 'react';

export function IconLogo({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '60'}`}
      height={`${height ? height : '14'}`}
      viewBox="0 0 60 14"
      fill="none"
    >
      <path
        d="M34.8565 12.4002C34.8565 12.5102 34.8894 12.573 34.9523 12.573C34.9972 12.573 35.0401 12.5524 35.092 12.5174L53.1005 0.46823C53.4169 0.255361 53.7063 0.14327 54.1384 0.14327H58.0961C58.7049 0.14327 59.111 0.56181 59.111 1.18911V8.9758C59.111 9.91674 58.9085 10.4597 58.0971 10.9626L53.2961 13.9345C53.2323 13.9756 53.1804 13.9962 53.1355 13.9962C53.0776 13.9962 53.0237 13.9499 53.0237 13.7803V4.69168C53.0237 4.59295 52.9918 4.51686 52.9269 4.51686C52.882 4.51686 52.8401 4.53742 52.7882 4.57033L39.6226 13.3823C39.2534 13.6291 38.95 13.7031 38.6127 13.7031H29.8848C29.2761 13.7031 28.87 13.2846 28.87 12.6573V1.43591C28.87 1.35364 28.834 1.27857 28.7732 1.27857C28.7283 1.27857 28.6863 1.29811 28.6315 1.33307L19.9485 6.70725C19.8617 6.76072 19.8377 6.80597 19.8377 6.84813C19.8377 6.88721 19.8527 6.92217 19.9146 6.98593L26.1157 13.3761C26.1985 13.4615 26.2554 13.5263 26.2554 13.5931C26.2554 13.6692 26.1646 13.7031 26.0588 13.7031H20.4465C20.0064 13.7031 19.6681 13.6342 19.4306 13.3895L15.6704 9.51465C15.6335 9.4766 15.6016 9.45295 15.5616 9.45295C15.5287 9.45295 15.4848 9.46941 15.4459 9.49511L9.15498 13.3905C8.77477 13.626 8.51132 13.7031 8.13909 13.7031H2.34814C1.73941 13.7031 1.33325 13.2846 1.33325 12.6573V5.01355C1.33325 4.07261 1.53783 3.53169 2.34814 3.02986L7.17809 0.0394067C7.22599 0.00855606 7.2689 -0.00378418 7.30882 -0.00378418C7.38167 -0.00378418 7.42158 0.075399 7.42158 0.247134V10.4669C7.42158 10.5739 7.45052 10.6242 7.51838 10.6242C7.56329 10.6242 7.6072 10.5965 7.66208 10.5625L23.9821 0.456918C24.3713 0.215255 24.6108 0.14327 25.0589 0.14327H33.8406C34.4493 0.14327 34.8555 0.56181 34.8555 1.18911V12.4002H34.8565Z"
        fill="#05141F"
      />
    </svg>
  );
}

export function IconClosed({ width, height, currentColor }) {
  return (
    <svg
      width={`${width ? width : '20'}`}
      height={`${height ? height : '20'}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.25 3.75L10 10M3.75 16.25L10 10M3.75 3.75L10 10M16.25 16.25L10 10"
        stroke={`${currentColor ? currentColor : '#000'}`}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconLogOut({ width, height, currentColor }) {
  return (
    <svg
      width={`${width ? width : '20'}`}
      height={`${height ? height : '20'}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.8333 2.5H17.5V17.5H10.8333M7.5 5L2.84314 10L7.5 15M3.77451 10H10.8333"
        stroke={`${currentColor ? currentColor : '#000'}`}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

// 인풋 클리어 아이콘
export function IconClear({ width, height }) {
  return (
    <svg
      width={`${width ? width : '24'}`}
      height={`${height ? height : '24'}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect rx="12" fill="#CCD0D3" />
      <path d="M7.5 16.5L16.5 7.50003" stroke="white" strokeWidth="1.44" strokeLinecap="round" />
      <path
        d="M16.5 16.5L7.50003 7.50003"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 인풋 샌드 아이콘
export function IconSend({ width, height }) {
  return (
    <svg
      width={`${width ? width : '20'}`}
      height={`${height ? height : '20'}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M11.1966 8.46146L9.48716 10.1709L3.33331 7.7777L16.6666 3.33325L12.2222 16.6666L10.5128 12.564"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
// 서치 중일때 아이콘
export function IconSendSearch({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '20'}`}
      height={`${height ? height : '20'}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect x="4.99805" y="4.99951" width="10" height="10" rx="1.42857" fill="white" />
    </svg>
  );
}

// 더보기 플러스 아이콘
export function IconPlus({ width, height }) {
  return (
    <svg
      width={`${width ? width : '24'}`}
      height={`${height ? height : '24'}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 상담 상태 아이콘
export function IconState({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '14'}`}
      height={`${height ? height : '14'}`}
      viewBox="0 0 14 14"
      fill="none"
    >
      <rect width="14" height="14" rx="5" fill="#468F13" />
      <path
        d="M9.99963 5L6.42737 8.97197L3.99963 6.5"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStart({ width, height, fill, isHalf, isLeft }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '29'}`}
      height={`${height ? height : '26'}`}
      viewBox="0 0 29 26"
      fill="none"
    >
      <defs>
        <clipPath id="half-left-clip">
          <rect x="0" y="0" width="14.5" height="26" />
        </clipPath>
        <clipPath id="half-right-clip">
          <rect x="14.5" y="0" width="14.5" height="26" />
        </clipPath>
      </defs>
      <path
        d="M14.5 1.13871L18.2905 8.89449L18.4088 9.13647L18.6759 9.17086L27.3765 10.2906L21.0201 16.182L20.8172 16.37L20.8688 16.6419L22.4674 25.0711L14.7341 20.9731L14.5 20.8491L14.2659 20.9731L6.53261 25.0711L8.13124 16.6419L8.18279 16.37L7.97988 16.182L1.62346 10.2906L10.3241 9.17086L10.5912 9.13647L10.7095 8.89449L14.5 1.13871Z"
        fill={isHalf ? (isLeft ? fill : 'none') : fill}
      />
    </svg>
  );
}

export function IconDotMenu({ width, height, fill, stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '24'}`}
      height={`${height ? height : '24'}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 13V11H6V13H4Z" stroke="#05141F" strokeWidth="2" />
      <path d="M11 13V11H13V13H11Z" stroke="#05141F" strokeWidth="2" />
      <path d="M18 13L18 11H20V13H18Z" stroke="#05141F" strokeWidth="2" />
      <rect x="3" y="10" width="4" height="4" fill="#05141F" />
      <rect x="10" y="10" width="4" height="4" fill="#05141F" />
      <rect x="17" y="10" width="4" height="4" fill="#05141F" />
    </svg>
  );
}

export function IconAgent({ width, height, fill, stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '20'}`}
      height={`${height ? height : '20'}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.97074 17.1817C12.7167 17.1817 14.9476 15.4036 14.9895 12.6401M14.9895 12.6401H17.4998V9.26005L14.9901 8.41504M14.9895 12.6401C14.9898 12.6205 14.99 9.83502 14.9901 8.41504M4.95138 8.41504C4.95145 9.7828 4.95164 12.6198 4.95195 12.6401H2.44165V9.10821L4.95138 8.41504ZM4.95138 8.41504C4.95136 8.00038 4.95135 7.5762 4.95135 7.57004C4.95135 4.76993 7.19861 2.5 9.97074 2.5C12.7429 2.5 14.9901 4.76993 14.9901 7.57004C14.9901 7.57692 14.9901 7.9162 14.9901 8.41504"
        stroke="#05141F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="9.9646" cy="17.1771" r="1.5" fill="#05141F" />
    </svg>
  );
}

// 유저 채팅 수정하기 아이콘
export function IconUserModify({ width, height, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '16'}`}
      height={`${height ? height : '16'}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.5301 14.4125H13.1301V13.2125H12.5301V14.4125ZM5.74219 14.4125H12.5301V13.2125H5.74219V14.4125Z"
        fill="#05141F"
      />
      <path
        d="M8.35893 3.86964L10.4161 1.8125L14.1875 5.58393L12.1304 7.64107L10.4161 5.92678L10.0732 5.58393L8.35893 3.86964ZM8.35893 3.86964L6.64464 5.58393L5.27321 6.95536L2.1875 10.0411L2.1875 13.8125H2.87322H5.95893L9.04464 10.7268L10.4161 9.35536L10.7563 9.01513"
        stroke="#05141F"
        strokeWidth="1.2"
      />
    </svg>
  );
}

// 유저 채팅 수정 캔슬
export function IconModifyCancel({ width, height, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '16'}`}
      height={`${height ? height : '16'}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00012 13.9999C11.3138 13.9999 14.0001 11.3136 14.0001 7.99988C14.0001 4.68617 11.3138 1.99988 8.00012 1.99988C4.68641 1.99988 2.00012 4.68617 2.00012 7.99988C2.00012 11.3136 4.68641 13.9999 8.00012 13.9999Z"
        stroke="#05141F"
        strokeWidth="1.2"
      />
      <path
        d="M12.2002 3.79932L3.80017 12.1993"
        stroke="#05141F"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}
// 새로고침 아이콘
export function IconRefresh({ width, height, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '16'}`}
      height={`${height ? height : '16'}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.6667 9C12.6667 11.7614 10.4282 14 7.66675 14C4.90532 14 2.66675 11.7614 2.66675 9C2.66675 6.23858 4.90532 4 7.66675 4C8.00921 4 8.34364 4.03443 8.66675 4.10002"
        stroke="#05141F"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path
        d="M7.58923 1.69629L10.0741 4.18114C9.10369 5.15153 8.55963 5.69559 7.58923 6.66599"
        stroke="#05141F"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconSymbol({ width, height, currentColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '18'}`}
      height={`${height ? height : '10'}`}
      viewBox="0 0 18 10"
      fill="none"
    >
      <path
        d="M4.43484 9.79098C4.22786 9.79098 4.1477 9.52132 4.32115 9.40763L14.5141 2.79016C14.6861 2.67793 14.8435 2.61816 15.0796 2.61816H17.1932C17.5226 2.61816 17.7893 2.8849 17.7893 3.21432V7.28829C17.7893 7.78533 17.6785 8.07393 17.2369 8.33922L15.1627 9.58546C14.9383 9.72101 14.6817 9.79098 14.4194 9.79098H4.43338H4.43484Z"
        fill="white"
      />
      <path
        d="M13.5652 0.208984C13.7721 0.208984 13.8523 0.478639 13.6789 0.592331L3.48591 7.2098C3.31391 7.32204 3.15649 7.3818 2.92036 7.3818H0.806849C0.477433 7.3818 0.210693 7.11506 0.210693 6.78564V2.71167C0.210693 2.21463 0.32147 1.92603 0.763121 1.66075L2.83728 0.414504C3.06175 0.278948 3.31828 0.208984 3.58065 0.208984H13.5666H13.5652Z"
        fill="white"
      />
    </svg>
  );
}

// 화살표 아이콘
export function IconArrow({ width, height, currentColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '16'}`}
      height={`${height ? height : '16'}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.33335 13.333L10.6667 7.99967L5.33335 2.66634"
        stroke={`${currentColor ? currentColor : '#05141F'}`}
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

/////////////////////////////////////
// 하단은 추후 필요 없는 아이콘은 삭제 한다.//
/////////////////////////////////////

// 퀵메뉴 아이콘 채팅
export function IconQuick() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_678_1351)">
        <path
          d="M11.936 24C9.92514 23.9737 8.02865 23.5004 6.26154 22.5332C6.10029 22.4449 5.9653 22.4224 5.78249 22.4825C4.30036 22.9689 2.81448 23.4432 1.32954 23.9174C0.825186 24.0789 0.432389 23.9644 0.167086 23.585C-0.0335307 23.2976 -0.0279059 22.9905 0.0761525 22.6684C0.558946 21.1762 1.0333 19.6822 1.51985 18.1918C1.57422 18.0266 1.55641 17.9017 1.47579 17.7552C0.446451 15.8789 -0.0569673 13.8665 0.00584275 11.7301C0.108964 8.22072 1.48235 5.28235 4.10725 2.95344C6.01123 1.26591 8.25271 0.279882 10.782 0.0563814C14.8346 -0.300468 18.2658 1.03678 20.9966 4.06342C22.7178 5.97163 23.6777 8.24232 23.9374 10.7957C24.5543 16.8471 20.5391 22.3839 14.5843 23.7174C13.7125 23.9127 12.8285 24 11.9351 24H11.936ZM2.39637 21.5885C2.51543 21.5566 2.58199 21.5415 2.64668 21.5209C3.53727 21.2354 4.44286 20.9865 5.3147 20.6522C5.96717 20.4015 6.49309 20.4945 7.09682 20.8353C9.27454 22.0646 11.6163 22.4149 14.064 21.9031C16.6102 21.3716 18.6539 20.0268 20.1801 17.9261C21.9265 15.5211 22.4881 12.8344 21.8984 9.93078C21.3828 7.38964 20.0319 5.35559 17.947 3.82396C15.7262 2.19184 13.2269 1.5852 10.512 1.98431C7.75679 2.38999 5.535 3.74883 3.87475 5.98478C2.07482 8.40854 1.51797 11.1253 2.09545 14.0777C2.31575 15.2056 2.74136 16.2602 3.34228 17.2406C3.55508 17.5871 3.59258 17.9308 3.45571 18.3111C3.31321 18.7074 3.19228 19.1112 3.06385 19.5122C2.84729 20.1874 2.63074 20.8616 2.39731 21.5904L2.39637 21.5885Z"
          fill="currentColor"
        />
        <path
          d="M8.47939 12.0019C8.4747 12.6461 7.93191 13.1767 7.28881 13.1654C6.65415 13.1542 6.13292 12.6208 6.1376 11.986C6.14229 11.3418 6.68508 10.8112 7.32818 10.8224C7.96285 10.8337 8.48407 11.3671 8.47939 12.0019Z"
          fill="currentColor"
        />
        <path
          d="M13.1666 11.9981C13.1647 12.6423 12.6238 13.1748 11.9798 13.1654C11.3451 13.1569 10.822 12.6254 10.8248 11.9897C10.8267 11.3455 11.3676 10.813 12.0117 10.8224C12.6463 10.8308 13.1694 11.3624 13.1666 11.9981Z"
          fill="currentColor"
        />
        <path
          d="M17.854 11.9972C17.8521 12.6414 17.3121 13.1738 16.6681 13.1654C16.0334 13.1569 15.5103 12.6263 15.5122 11.9906C15.5141 11.3464 16.0541 10.8139 16.6981 10.8224C17.3328 10.8308 17.8559 11.3614 17.854 11.9972Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_678_1351">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
