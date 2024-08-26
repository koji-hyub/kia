import React, { useState } from 'react';
import Style from './EvaluateStyle';
import { IconStart } from '../../assets/images/common/IconSet';

const Evaluate = Style(APP_SKIN);

function EvaluateWrap(props) {
  const [selectedRating, setSelectedRating] = useState(0); // 현재 선택된 별점 (0부터 5까지)

  function handleEvaluate(index) {
    // 선택된 별점을 설정 (1부터 시작)
    setSelectedRating(index + 1);
  }

  return (
    <Evaluate>
      <div className={'start-set'}>
        <ul>
          {[0, 1, 2, 3, 4].map((index) => (
            <li key={index} className={index < selectedRating ? 'isActive' : ''}>
              <button onClick={() => handleEvaluate(index)}>
                <IconStart
                  fill={
                    index < selectedRating
                      ? 'var(--Tertiary-Afternoon-Yellow)'
                      : 'var(--Primary-Polar-White)'
                  }
                  stroke={
                    index < selectedRating
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
    </Evaluate>
  );
}

export default EvaluateWrap;
