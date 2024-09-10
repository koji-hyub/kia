import React from 'react';

import Style from './QuickRepliesStyle';

const QuickReplies = Style(APP_SKIN);
const QuickRepliesItem = [
  { id: 1, tag: '1 QuickReplies' },
  { id: 2, tag: '2 QuickReplies' },
  { id: 3, tag: '3 QuickReplies' },
  { id: 4, tag: '4 QuickReplies QuickRepl' },
  { id: 5, tag: '5 QuickReplies QuickRe' },
  { id: 6, tag: '6 QuickReplies' },
  { id: 7, tag: '7 QuickReplies' }
];
function QuickRepliesWrap({ tag, ...reset }) {
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
  return (
    // 빠른답변
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
            <QuickReplies {...reset}>
              <span>{tag}</span>
            </QuickReplies>
          </div>
        ))}
      </div>
    </div>
    // <QuickReplies {...reset}>
    //   <span>{tag}</span>
    // </QuickReplies>
  );
}

export default QuickRepliesWrap;
