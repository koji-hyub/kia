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
  function handleMouseDown(event, index, isLeft) {
    setIsDragging(true);
    if (isLeft) {
      handleEvaluate(index + 0.5); // 반별 선택
    } else {
      handleEvaluate(index + 1); // 전체 별 선택
    }
  }

  // 드래그 중일 때 호출
  function handleMouseMove(event) {
    if (!isDragging) return; // 드래그 중일 때만 동작
    const ulElement = event.currentTarget;
    const rect = ulElement.getBoundingClientRect();
    const x = event.clientX - rect.left; // 마우스의 x 좌표
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
  function handleMouseUp() {
    setIsDragging(false); // 드래그 종료
  }

  return (
    <EvaluateHalf>
      <div className={'start-set'}>
        <ul
          onMouseMove={handleMouseMove} // ul에 드래그 이벤트 바인딩
          onMouseDown={() => setIsDragging(true)} // 드래그 시작
          onMouseUp={handleMouseUp} // 드래그 종료
          onMouseLeave={handleMouseUp} // ul 밖으로 나가면 드래그 종료
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <li
              key={index}
              className={index + 1 <= selectedRating ? 'isActive' : ''}
              onMouseDown={(event) => handleMouseDown(event, index, true)} // 좌측 버튼 드래그 시작
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
                      : 'var(--Primary-Polar-White)'
                  }
                  stroke={
                    index + 0.5 <= selectedRating
                      ? 'var(--Tertiary-Afternoon-Yellow)'
                      : 'var(--Grey-Spectrum-Coll-Grey-40)'
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
                      : 'var(--Primary-Polar-White)'
                  }
                  stroke={
                    index + 1 <= selectedRating
                      ? 'var(--Tertiary-Afternoon-Yellow)'
                      : 'var(--Grey-Spectrum-Coll-Grey-40)'
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
