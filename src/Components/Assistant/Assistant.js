import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Style from './AssistantStyle';
import { BotIcon, LogoImg } from '../../assets/images/common/logo';
import Text from '../Text/Text';
import Time from '../Time/Time';
import Loading from '../Loading/Loading';
import QuickReplies from '../QuickReplies/QuickReplies';
import 'swiper/css';
import ChangeText from '../ChangeText/ChangeText';

const Assistant = Style(APP_SKIN);

const textItem = [
  { id: 1, text: '그래픽 요소나 시각적 연출을 보여줄 때 젝트 모형의 채움 글로도 이용된다.' },
  { id: 2, text: '더미 텍스트 입니다.' }
];

const QuickRepliesItem = [
  { id: 1, tag: '1 QuickReplies' },
  { id: 2, tag: '2 QuickReplies' },
  { id: 3, tag: '3 QuickReplies' },
  { id: 4, tag: '4 QuickReplies QuickRepl' },
  { id: 5, tag: '5 QuickReplies QuickRe' },
  { id: 6, tag: '6 QuickReplies' },
  { id: 7, tag: '7 QuickReplies' }
];

const today = new Date();
const timeOption = today.toLocaleTimeString('ko-KR', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

const fullDateTimeString = ` ${timeOption}`;
const trimmedDateString = fullDateTimeString.split(' ').slice(1).join(' ');
const getCurrentTime = trimmedDateString;

function AssistantWrap(props) {
  // 가로 스크롤 Quick Replies ****** //
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing'; // 드래그 중 커서 변경
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab'; // 드래그 종료 시 커서 변경
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab'; // 드래그 종료 시 커서 변경
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    containerRef.current.scrollLeft = scrollLeft - walk;
  };
  // ****** 가로 스크롤 Quick Replies //

  // 상담사 연결 요청시 상태 값 변경
  const [adviser, setAdviser] = useState(true);
  const adviserName = '김기아';

  return (
    <Assistant>
      <div className={'icon-box'}>
        {adviser ? (
          <span className={`icon`}>
            <BotIcon />
          </span>
        ) : (
          <span className={'icon adviser'}>
            <LogoImg width={32} height={32} />
          </span>
        )}
        {/*--Grey-Spectrum-Coll-Grey-50*/}
        <div className={'assistant'}>
          {adviser ? '기아 AI 어시스턴트' : `${adviserName} 상담사`}
        </div>
      </div>
      <div className={'text-box'}>
        <div className={'inner'}>
          <Loading />
        </div>
      </div>
      {textItem.map((item) => (
        <div className={'text-box'} key={item.id}>
          <div className="inner">
            <Text size={'--font-size-5'} color={'--Grey-Spectrum-Coll-Grey-50'} text={item.text} />
          </div>
        </div>
      ))}
      <ChangeText />
      <div className={'icon-box'}>
        {!adviser ? (
          <span className={`icon`}>
            <BotIcon />
          </span>
        ) : (
          <span className={'icon adviser'}>
            <LogoImg width={32} height={32} />
          </span>
        )}
        {/*--Grey-Spectrum-Coll-Grey-50*/}
        <div className={'assistant'}>
          {!adviser ? '기아 AI 어시스턴트' : `${adviserName} 상담사`}
        </div>
      </div>
      <div className={'text-box'}>
        <div className={'inner'}>
          <Loading />
        </div>
      </div>
      {/*빠른답변*/}
      <div
        className={'quick-replies'}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        role={'group'}
        aria-labelledby={'user-info-title'}
      >
        <span className={'blind'} id={"user-info-title'"}>
          버튼 형식의 빠른 답변을 제공
        </span>
        <div className="item-box">
          {QuickRepliesItem.map((item) => (
            <div className="inner" key={item.id}>
              <QuickReplies tag={item.tag} />
            </div>
          ))}
        </div>
      </div>
      {/*빠른답변*/}
      <Time align={'left'} getCurrentTime={getCurrentTime} />
    </Assistant>
  );
}

export default AssistantWrap;
