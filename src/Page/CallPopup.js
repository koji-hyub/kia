import React, { useState, useEffect, useRef } from 'react';
import Button from '../Components/Button/Button';
import Modal from '../Components/Popup/Modal';
import Text from '../Components/Text/Text';
const ChatApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null); // 선택된 모달 항목 저장
  const triggerButtonRef = useRef(null); // 버튼의 참조를 저장하기 위한 ref

  const modalItems = [
    {
      // 상담종료
      id: 1,
      title: '상담종료',
      content: (
        <Text
          color={'--Primary-Midnight-Black'}
          size={'--font-size-5'}
          text={
            '상담사 채팅을 종료하시겠습니까?<br /> 상담을 종료하면 이전 채팅 상담화면으로 돌아갑니다.'
          }
        />
      ),
      footer: true,
      buttons: true,
      link: null,
      linkText: '개인정보 처리방침 보러가기',
      btnName1: '취소',
      btnName2: '나가기',
      className: 'popup-center'
    },
    {
      // 약관 상세 보기
      id: 2,
      title: '약관 상세 보기',
      content: (
        <Text
          color={'--Primary-Midnight-Black'}
          size={'--font-size-5'}
          text={
            '약관 내용이 들어갑니다. 내용이 많은 부분은 컴포넌트를 만들어서 사용하시기 바랍니다.'
          }
        />
      ),
      footer: true,
      buttons: false,
      link: '/Main/UI_ACB_0001',
      linkText: '개인정보 처리방침 보러가기',
      btnName1: '확인',
      btnName2: null,
      className: 'popup-pull'
    }
  ];

  // 모달 열기
  const openModal = (e, modalIndex) => {
    triggerButtonRef.current = e.currentTarget; // 클릭된 버튼 참조를 저장
    setSelectedModal(modalItems[modalIndex]); // 선택된 모달 항목 설정
    setIsModalOpen(true);
    console.log('열기 버튼 클릭 ');
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
    console.log('닫기 버튼 클릭');
  };

  // 모달이 닫힌 후에 포커스를 저장된 버튼으로 이동
  useEffect(() => {
    if (!isModalOpen && triggerButtonRef.current) {
      triggerButtonRef.current.focus(); // 저장된 버튼으로 포커스 이동
    }
  }, [isModalOpen]);

  return (
    <>
      {modalItems.map((item, index) => (
        <div key={item.id} style={{ marginTop: '5rem', textAlign: 'center' }}>
          <Button onClick={(e) => openModal(e, index)} text={item.title} />
        </div>
      ))}

      {selectedModal && (
        <Modal
          title={selectedModal.title}
          content={selectedModal.content}
          footer={selectedModal.footer}
          className={selectedModal.className}
          btnName1={selectedModal.btnName1}
          btnName2={selectedModal.btnName2}
          link={selectedModal.link}
          linkText={selectedModal.linkText}
          buttons={selectedModal.buttons}
          modalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ChatApp;
