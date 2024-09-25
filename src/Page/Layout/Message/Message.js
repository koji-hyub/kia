import React, { useState, useRef, useEffect } from 'react';
import Style from './MessageStyle';
// import MessageInput from '../../../Components/MessageInput/MessageInput';
import { IconClear, IconSend, IconSendSearch } from '../../../assets/images/common/IconSet';
import Text from '../../../Components/Text/Text';

const Message = Style(APP_SKIN);

const MessageWrap = () => {
  const [message, setMessage] = useState('');
  const [inputHeight, setInputHeight] = useState(36); // 기본 높이 설정
  const inputRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [sheetHeight, setSheetHeight] = useState(0); // bottom-sheet 높이 상태

  function clearButton() {
    setMessage(''); // 입력 필드 초기화
    inputRef.current.style.height = 36 + 'px';
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value);

    const len = e.target.value.length;

    // 입력창 높이 조절 (최대 3줄까지)
    const textareaLineHeight = 36; // 줄당 높이
    const maxRows = 3; // 최대 줄 수
    const lines = e.target.value.split('\n').length;
    setInputHeight(Math.min(lines * textareaLineHeight, maxRows * textareaLineHeight));

    if (len >= 2) {
      setBottomOpen(true);
    } else {
      setBottomOpen(false);
    }
  };

  useEffect(() => {
    if (bottomOpen && bottomSheetRef.current) {
      const bottomSheet = bottomSheetRef.current;
      const innerElement = bottomSheet.querySelector('.inner');
      const h = innerElement.clientHeight;

      setTimeout(() => {
        setSheetHeight(h); // 애니메이션을 위해 높이 적용
      }, 10); // 트랜지션과 일치시키기 위해 약간의 딜레이 설정
    }
  }, [bottomOpen]);

  const handleCloseBottomSheet = () => {
    // 애니메이션을 위해 height를 0으로 변경
    setSheetHeight(0);

    // 애니메이션이 완료된 후에 bottomOpen을 false로 설정하여 바텀시트를 완전히 닫음
    setTimeout(() => {
      setBottomOpen(false);
    }, 500); // 트랜지션 시간과 맞춰 500ms 후에 bottomOpen을 false로 설정
  };
  return (
    <Message>
      {bottomOpen && (
        <div
          className={'bottom-sheet'}
          ref={bottomSheetRef}
          style={{
            height: `${sheetHeight}px`, // height를 동적으로 설정
            opacity: bottomOpen ? 1 : 0,
            visibility: bottomOpen ? 'visible' : 'hidden'
          }}
        >
          <div className="inner">
            <Text text={'어'} onClick={handleCloseBottomSheet} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
            <Text text={'어'} />
          </div>
        </div>
      )}
      <div className={'message-area'}>
        {/*<ActionButton />*/}

        <div className={'message-input'}>
          <textarea
            ref={inputRef}
            value={message}
            onChange={handleInputChange}
            className={'textarea'}
            style={{
              height: `${inputHeight}px`,
              resize: 'none',
              overflow: 'hidden'
            }}
            rows={1}
            placeholder="메세지를 입력하세요."
          />

          <div className={'send-item'}>
            {message && (
              <button className={'clear'} onClick={clearButton}>
                <span className={'blind'}>메세지 삭제</span>
                <IconClear width={24} height={24} />
              </button>
            )}
            <button
              className={`send ${message ? 'isActive' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <IconSend width={20} height={20} />
              <span className={'blind'}>{message ? '메세지 전송' : ''}</span>
            </button>

            {/*사용자가 메세지를 보내고나서*/}
            {/*챗봇의 답변이 Searching 중 일때 활성화 */}
            <button className={'send isSearch'}>
              <IconSendSearch />
              <span className={'blind'}>{message ? '검색 중 입니다.' : ''}</span>
            </button>
          </div>
        </div>
      </div>
    </Message>
  );
};

export default MessageWrap;
