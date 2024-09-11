import React, { useState } from 'react';
import Style from './EvaluateHalfStyle';
import { IconStart } from '../../assets/images/common/IconSet';

const EvaluateHalf = Style(APP_SKIN);

function EvaluateWrap(props) {
  const [selectedRating, setSelectedRating] = useState(0); // 현재 선택된 별점 (0부터 5까지)
  const [clickCount, setClickCount] = useState(0); // 클릭 카운트

  function handleEvaluate(index, isLeft) {
    // 클릭 카운트 증가
    setClickCount((prevCount) => prevCount + 1);

    // 선택된 별점을 설정 (0.5 단위로 설정)
    if (isLeft) {
      // 좌측 버튼 클릭
      setSelectedRating(index + 0.5);
    } else {
      // 우측 버튼 클릭
      setSelectedRating(index + 1);
    }

    // 클릭 카운트가 3 이상이면 리셋
    if (clickCount >= 2) {
      setSelectedRating(0);
      setClickCount(0);
    }
  }

  return (
    <EvaluateHalf>
      <div className={'start-set'}>
        <ul>
          {[0, 1, 2, 3, 4].map((index) => (
            <li key={index} className={index + 1 <= selectedRating ? 'isActive' : ''}>
              {/* 좌측 반쪽 별 버튼 */}
              <button
                onClick={() => handleEvaluate(index, true)}
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
                onClick={() => handleEvaluate(index, false)}
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
