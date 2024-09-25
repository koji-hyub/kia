import React, { useState, useEffect, useRef } from 'react';
import Button from '../Components/Button/Button';
import Modal from '../Components/Popup/Modal';
import Text from '../Components/Text/Text';
import Heading from '../Components/Heading/Heading';
import EvaluateHalf from '../Components/Evaluate/EvaluateHalf';
import InputText from '../Components/Input/InputText';
import Input from '../Components/Input/Input';
const ChatApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null); // 선택된 모달 항목 저장
  const triggerButtonRef = useRef(null); // 버튼의 참조를 저장하기 위한 ref

  // 회원정보 입력
  const infoItem = [
    {
      id: 1,
      label: '성명',
      placeholder: '성명을 입력하세요.',
      required: true,
      error: true,
      msg: '',
      errorMsg: '성명이 입력되지 않았습니다.'
    },
    {
      id: 2,
      label: '휴대폰번호',
      placeholder: '휴대폰번호를 입력하세요.',
      required: true,
      error: false,
      msg: '공백 특수기호 없이 숫자만 입력하세요.',
      errorMsg: '휴대폰번호가 입력되지 않았습니다.'
    },
    {
      id: 3,
      label: '생년월일',
      placeholder: '생년월일을 입력하세요.',
      required: true,
      error: false,
      msg: '예) 19801212',
      errorMsg: '생년월일이 입력되지 않았습니다.'
    },
    {
      id: 4,
      label: '차량번호',
      placeholder: '차량번호를 입력하세요',
      required: false,
      error: false,
      msg: '',
      errorMsg: ''
    }
  ];

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
    },
    {
      // 약관 상세 보기
      id: 3,
      title: '상담사 채팅 만족도 조사',
      content: (
        <div className={'satisfied'}>
          <Heading level={3} size={'--font-size-5'} title={'채팅 상담은 어떠셨나요?'} />
          <div className={'evaluate'}>
            <EvaluateHalf />
            <Text
              color={'--Grey-Spectrum-Coll-Grey-40'}
              size={'--font-size-11'}
              text={'좌우로 드래그 하세요.'}
            />
          </div>
          <Heading level={3} size={'--font-size-5'} title={'추가의견이 있으면 입력해주세요.'} />
          <InputText placeholder={'내용을 입력해 주세요.'} />
        </div>
      ),
      footer: true,
      buttons: true,
      link: null,
      linkText: null,
      btnName1: '다음에 하기',
      btnName2: '완료',
      className: 'popup-center'
    },
    {
      // 약관 상세 보기
      id: 4,
      title: '개인 회원 정보 입력',
      content: (
        <div className={'member-information'}>
          <ul>
            {infoItem.map((item) => (
              <li key={item.id}>
                <Input
                  label={item.label}
                  placeholder={item.placeholder}
                  required={item.required}
                  error={item.error}
                  msg={item.msg}
                  errorMsg={item.errorMsg}
                />
              </li>
            ))}
          </ul>
          <Text
            color={'--Alert-Error'}
            size={'--font-size-7'}
            text={'* 표시 항목은 필수 입력입니다.'}
          />
        </div>
      ),
      footer: true,
      buttons: false,
      link: null,
      linkText: null,
      btnName1: '확인',
      btnName2: null,
      className: 'popup-center'
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
