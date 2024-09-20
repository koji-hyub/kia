import React, { useState } from 'react';
import Style from './EvaluateHalfStyle';
import { IconStart } from '../../assets/images/common/IconSet';

const EvaluateHalf = Style(APP_SKIN);

function EvaluateWrap(props) {
  const [selectedRating, setSelectedRating] = useState(0); // 현재 선택된 별점 (0부터 5까지)
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태 확인

  // 별점을 설정하는 함수
  function handleEvaluate(rating) {
    setSelectedRating(rating);
  }

  // 드래그 시작 시 호출
  function handleStart(event, index, isLeft) {
    setIsDragging(true);
    if (isLeft) {
      handleEvaluate(index + 0.5); // 반별 선택
    } else {
      handleEvaluate(index + 1); // 전체 별 선택
    }
  }

  // 마우스 또는 터치 위치를 기반으로 별점을 설정하는 함수
  function handleMove(event) {
    if (!isDragging) return; // 드래그 중일 때만 동작

    const ulElement = event.currentTarget;
    const rect = ulElement.getBoundingClientRect();
    let clientX;

    // 터치 이벤트 처리
    if (event.type === 'touchmove') {
      clientX = event.touches[0].clientX;
    } else {
      // 마우스 이벤트 처리
      clientX = event.clientX;
    }

    const x = clientX - rect.left; // 마우스 또는 터치의 x 좌표
    const totalWidth = rect.width; // ul의 전체 너비
    const perStarWidth = totalWidth / 5; // 각 별의 너비
    const index = Math.floor(x / perStarWidth); // 마우스 위치에 따른 별의 인덱스 계산
    const offset = (x % perStarWidth) / perStarWidth; // 현재 별 내에서의 위치 (0~1)

    if (offset <= 0.5) {
      handleEvaluate(index + 0.5); // 반별 선택
    } else {
      handleEvaluate(index + 1); // 전체 별 선택
    }
  }

  // 드래그 종료 시 호출
  function handleEnd() {
    setIsDragging(false); // 드래그 종료
  }

  return (
    <EvaluateHalf>
      <div className={'start-set'}>
        <ul
          onMouseMove={handleMove} // 마우스 드래그 이벤트
          onMouseDown={() => setIsDragging(true)} // 마우스 드래그 시작
          onMouseUp={handleEnd} // 마우스 드래그 종료
          onMouseLeave={handleEnd} // 마우스가 영역 밖으로 나가면 드래그 종료
          onTouchMove={handleMove} // 터치 드래그 이벤트
          onTouchStart={() => setIsDragging(true)} // 터치 드래그 시작
          onTouchEnd={handleEnd} // 터치 드래그 종료
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <li
              key={index}
              className={index + 1 <= selectedRating ? 'isActive' : ''}
              onMouseDown={(event) => handleStart(event, index, true)} // 좌측 반별 클릭
              onTouchStart={(event) => handleStart(event, index, true)} // 터치 시작 처리
            >
              {/* 좌측 반쪽 별 버튼 */}
              <button
                onClick={() => handleEvaluate(index + 0.5)}
                aria-label={`Rate ${index + 0.5} stars`}
                className="half"
              >
                <IconStart
                  fill={
                    index + 0.5 <= selectedRating
                      ? 'var(--Tertiary-Afternoon-Yellow)'
                      : 'var(--Grey-Spectrum-Coll-Grey-20)'
                  }
                />
              </button>
              {/* 우측 전체 별 버튼 */}
              <button
                onClick={() => handleEvaluate(index + 1)}
                aria-label={`Rate ${index + 1} stars`}
                className="full"
              >
                <IconStart
                  fill={
                    index + 1 <= selectedRating
                      ? 'var(--Tertiary-Afternoon-Yellow)'
                      : 'var(--Grey-Spectrum-Coll-Grey-20)'
                  }
                />
              </button>
            </li>
          ))}
        </ul>
        <span className="blind">{selectedRating}점</span>
      </div>
    </EvaluateHalf>
  );
}

export default EvaluateWrap;
