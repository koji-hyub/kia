import React, { useState, useEffect, useRef } from 'react';
import Style from './ModalStyle';
import { IconClosed, IconLink } from '../../assets/images/common/IconSet';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import ButtonLink from '../Button/ButtonLink';

const Modal = Style('BasicSkin'); // 스킨 타입에 맞게 스타일 적용

const ModalWrap = (props) => {
  const {
    title,
    content,
    buttons,
    footer,
    className,
    modalOpen,
    closeModal,
    btnName1,
    btnName2,
    link,
    linkText
  } = props;

  console.log(link, '');
  const popupRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false); // 모달 닫기 상태를 관리

  // 키보드 포커스 이동 웹 접근성 관련
  useEffect(() => {
    const popup = popupRef.current;
    if (!popup) return;
    // 포커스 가능한 요소들 찾기
    const focusableElements = popup.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([tabindex="-1"]), *[contenteditable]'
    );

    if (focusableElements.length === 0) return;

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab: 역방향 이동
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          // Tab: 순방향 이동
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    // 팝업 열렸을 때 첫 번째 포커스 가능한 요소로 포커스 이동
    firstFocusableElement?.focus();
    // 포커스 트랩을 위한 이벤트 핸들러 등록
    document.addEventListener('keydown', handleTabKey);
    return () => {
      // cleanup
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [modalOpen]);

  // 탑, 바톰 팝업이 열릴때 실행
  useEffect(() => {
    if (modalOpen && popupRef.current) {
      const isChecked = popupRef.current.classList.contains('popup-center');
      const isPullChecked = popupRef.current.classList.contains('popup-pull');

      const inner = popupRef.current.querySelector('.inner');

      // 풀 팝업
      if (isPullChecked) {
        inner.style.height = '0px';
        inner.scrollHeight; // 실제 높이를 계산
        inner.style.height = `100%`;
        return;
      }

      // // 센터 팝업일 경우
      setTimeout(() => {
        inner.style.transform = 'translateY(0)'; // 화면 중앙으로 이동
      }, 10); // 약간의 지연 시간 (ms)
      if (isChecked) return; // 센터 팝업일 경우 리턴

      // 상단 , 하단 팝업일 경우
      if (inner) {
        inner.style.height = '0px'; // 애니메이션 시작 전 높이를 0으로 설정
        const height = inner.scrollHeight; // 실제 높이를 계산
        inner.style.height = `${height}px`; // 높이를 설정하여 슬라이드 다운 애니메이션 적용
      }
    }
  }, [modalOpen]); // 모달이 열릴 때만 실행되도록 합니다.

  // 팝업이 닫힐 때
  const handleClose = () => {
    if (popupRef.current) {
      const isChecked = popupRef.current.classList.contains('popup-center');
      const inner = popupRef.current.querySelector('.inner');
      if (isChecked) {
        // 디폴트 "센터" 팝업이 닫힐때
        inner.style.transform = 'translateY(-10px)'; // 화면 중앙으로 이동
        setTimeout(() => {
          closeModal(); // 전달받은 closeModal을 닫는다.
          setIsClosing(false); // 닫히는 상태를 다시 false로 설정
        }, 200); // 트랜지션 시간과 일치시킵니다 (0.3초)
        console.log('센터 팝업 닫힐때');
      } else {
        // 탑, 바톰 팝업이 닫힐때
        setIsClosing(true);
        // const inner = popupRef.current.querySelector('.inner');
        if (inner) {
          inner.style.height = '0px'; // 높이를 0으로 설정하여 닫히는 애니메이션 실행
        }
        // 애니메이션이 끝난 후에 모달을 닫습니다.
        setTimeout(() => {
          closeModal(); // 전달받은 closeModal을 닫는다.
          setIsClosing(false); // 닫히는 상태를 다시 false로 설정
        }, 200); // 트랜지션 시간과 일치시킵니다 (0.3초)
      }
    }
  };

  if (!modalOpen && !isClosing) return null; // 모달이 보이지 않을 때는 렌더링 안함.

  return (
    <Modal
      className={
        modalOpen ? `isActive ${className || 'popup-center'}` : className || 'popup-center'
      }
      ref={popupRef}
      style={{ display: modalOpen || isClosing ? 'flex' : 'none' }}
      role="dialog" // 웹 접근성: 모달 역할 지정
      aria-modal="true" // 웹 접근성: 모달임을 명시
      aria-labelledby="modal-title" // 웹 접근성: 타이틀 ID 연결
      aria-describedby="modal-content" // 웹 접근성: 내용 설명 ID 연결
    >
      <div className={'inner'}>
        <header>
          <Heading level={2} title={title || '팝업 기본 타이틀 입니다.'} id="modal-title" />
          <button className={'btn-closed'} onClick={handleClose}>
            <IconClosed />
            <span className={'blind'}>닫기</span>
          </button>
        </header>
        <main id="modal-content">{content ? content : '팝업 컨텐츠를 넣어주세요.'}</main>

        {footer ? (
          <footer>
            {link ? (
              <ButtonLink
                className={'btn text'}
                text={linkText ? linkText : '링크'}
                iconRight={<IconLink currentColor={'#05141F'} />}
                size={'small'}
                link={link}
              />
            ) : (
              ''
            )}
            {!buttons ? (
              <Button
                text={btnName1 ? btnName1 : '버튼명'}
                className={'btn primary'}
                onClick={handleClose}
              />
            ) : (
              <div className={'btn-area'}>
                <Button text={btnName1 ? btnName1 : '버튼명'} className={'btn secondary'} />
                <Button
                  text={btnName2 ? btnName2 : '버튼명'}
                  className={'btn primary'}
                  onClick={handleClose}
                />
              </div>
            )}
          </footer>
        ) : (
          ''
        )}
      </div>
    </Modal>
  );
};

export default ModalWrap;
