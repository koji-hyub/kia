// src/hooks/useViewportHeight.js

import { useEffect } from 'react';

export function useViewportHeight() {
  useEffect(() => {
    // 뷰포트 높이 업데이트 및 헤더 위치 조정 함수
    function updateViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      adjustHeaderPosition();
    }

    // 헤더 위치 조정 함수
    function adjustHeaderPosition() {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
        header.style.top = `0px`; // 헤더를 상단에 고정
      }
    }

    // 바디 패딩 조정 함수
    function adjustBodyPadding() {
      const initialViewportHeight = window.innerHeight;
      if (window.innerHeight < initialViewportHeight) {
        // 키패드가 열렸을 때
        document.body.style.paddingBottom = `${initialViewportHeight - window.innerHeight}px`;
      } else {
        // 키패드가 닫혔을 때
        document.body.style.paddingBottom = '0px';
      }
    }

    // 이벤트 리스너 등록
    window.addEventListener('resize', () => {
      updateViewportHeight();
      adjustBodyPadding();
    });
    window.addEventListener('orientationchange', () => {
      updateViewportHeight();
      adjustBodyPadding();
    });

    // 페이지 로드 시 초기 호출
    updateViewportHeight();
    adjustBodyPadding();

    // 클린업
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);
}
