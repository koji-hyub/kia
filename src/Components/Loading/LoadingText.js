import React, { useEffect, useRef } from 'react';
import Style from './LoadingTextStyle';

const LoadingText = Style(APP_SKIN);

const text = 'Search...';
const speed = 150; // 속도 조절을 위한 변수 (ms 단위)

function LoadingWrap(props) {
  const loadingRef = useRef(null); // DOM 참조를 위한 useRef
  const requestRef = useRef(null); // 애니메이션 요청을 추적하기 위한 ref

  useEffect(() => {
    let index = 0;
    let lastUpdateTime = performance.now(); // 마지막 업데이트 시간을 기록

    function animateText(currentTime) {
      const deltaTime = currentTime - lastUpdateTime; // 이전 업데이트와의 시간 차이 계산

      if (deltaTime > speed) {
        // 시간이 'speed'를 넘었을 때 텍스트 업데이트
        if (loadingRef.current) {
          loadingRef.current.textContent = text.substring(0, index + 1);
          index = (index + 1) % text.length;
        }
        lastUpdateTime = currentTime; // 마지막 업데이트 시간을 현재로 설정
      }

      requestRef.current = requestAnimationFrame(animateText); // 다음 프레임 호출
    }

    requestRef.current = requestAnimationFrame(animateText); // 애니메이션 시작

    // 클린업: 컴포넌트가 언마운트될 때 애니메이션 정지
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return <LoadingText ref={loadingRef}>Search...</LoadingText>;
}

export default LoadingWrap;
