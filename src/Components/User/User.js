import React, { useEffect } from 'react';
import Style from './UserStyle';
import Text from '../Text/Text';
import Time from '../Time/Time';
import Loading from '../Loading/Loading';

const User = Style(APP_SKIN);

const textItem = [
  {
    id: 1,
    text: '그래픽 요소나 시각적 연출을 보여줄 때 젝트 모형의 채움 글로도 이용된다. '
  },
  {
    id: 2,
    text: '더미 텍스트 입니다.'
  }
];

const today = new Date();
// 현재 시간
const timeOption = today.toLocaleTimeString('ko-KR', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

// 현재 날짜와 시간
const fullDateTimeString = ` ${timeOption}`;
const trimmedDateString = fullDateTimeString.split(' ').slice(1).join(' ');
const getCurrentTime = trimmedDateString;

// console.log(getCurrentTime);

function AssistantWrap(props) {
  useEffect(() => {}, []);
  return (
    <User>
      <div className={'message-box'}>
        <div className={'text-box'}>
          <div className={'inner'}>
            <Loading />
          </div>
        </div>
        {textItem.map((item) => (
          <div className={'text-box'} key={item.id}>
            <div className="inner">
              <Text size={'--font-size-5'} color={'--Primary-Polar-White'} text={item.text} />
            </div>
          </div>
        ))}
        <Time align={'right'} getCurrentTime={getCurrentTime} />
      </div>
    </User>
  );
}

export default AssistantWrap;
