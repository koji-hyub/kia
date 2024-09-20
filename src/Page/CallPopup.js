import React, { useState, useEffect, useRef } from 'react';
import Button from '../Components/Button/Button';
import Modal from '../Components/Popup/Modal';

const ChatApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null); // 선택된 모달 항목 저장
  const triggerButtonRef = useRef(null); // 버튼의 참조를 저장하기 위한 ref

  const modalItems = [
    {
      id: 1,
      title: '풀 팝업 ',
      content: '풀 팝업',
      className: 'popup-pull'
    },
    {
      id: 2,
      title: '센터 팝업 ',
      content: '센터 팝업',
      className: 'popup-center'
    },
    {
      id: 3,
      title: '바톰 팝업 ',
      content: '바톰 팝업',
      className: 'popup-bottom'
    },
    {
      id: 4,
      title: '상단 팝업 ',
      content: '상단 팝업',
      className: 'popup-top'
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
        <Button key={item.id} onClick={(e) => openModal(e, index)} text={item.title} />
      ))}

      {selectedModal && (
        <Modal
          title={selectedModal.title}
          content={selectedModal.content}
          className={selectedModal.className}
          modalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ChatApp;
