import React, { useEffect, useRef } from 'react';
import Style from './LoadingTextStyle';

const LoadingText = Style(APP_SKIN);

const text = 'Search...';
const speed = 13; // 속도 조절을 위한 변수 (값이 클수록 느려짐)

function LoadingWrap(props) {
  const loadingRef = useRef(null); // DOM 참조를 위한 useRef

  useEffect(() => {
    let index = 0;
    let frameCount = 0;

    function animateText() {
      if (loadingRef.current) {
        if (frameCount % speed === 0) {
          loadingRef.current.textContent = text.substring(0, index + 1);
          index = (index + 1) % text.length;
        }
        frameCount++;
        requestAnimationFrame(animateText); // 다음 프레임 호출
      }
    }

    requestAnimationFrame(animateText); // 애니메이션 시작

    // 클린업: 컴포넌트가 언마운트될 때 애니메이션 정지
    return () => cancelAnimationFrame(animateText);
  }, []);

  return <LoadingText ref={loadingRef}>Search...</LoadingText>;
}

export default LoadingWrap;
