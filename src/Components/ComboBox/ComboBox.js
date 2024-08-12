import React, { useState, useRef, useEffect } from 'react';
import Style from './ComboBoxStyle';
import { IconArrowType01 } from '~/assets/images/common/IconSet';

const ComboBox = Style(APP_SKIN);
function ComboBoxWrap({ title, option, className }) {
  const [isActive, setIsActive] = useState(false);
  const comboBoxRef = useRef(null);

  const handleCombo = (e) => {
    setIsActive(!isActive); // 콤보 박스 외부를 클릭했을 때 콤보 박스 닫기

    // 클릭 이벤트가 발생한 마우스의 Y 좌표
    const mouseY = e.clientY;

    // 화면의 높이
    const windowHeight = window.innerHeight;

    // 화면의 중앙 위치
    const screenCenter = windowHeight / 2;

    mouseY > screenCenter ? comboBoxRef.current.classList.add('bottom') : '';
  };
  const handleOptionClick = (e) => {
    const textContent = e.target.innerHTML;
    const title = comboBoxRef.current.querySelector('.title');
    title.innerHTML = textContent;
    title.style.color = '#000';
    setIsActive(false); // 옵션 선택 후 콤보 박스 닫기
    comboBoxRef.current.classList.remove('bottom');
  };

  const handleClickOutside = (e) => {
    if (comboBoxRef.current && !comboBoxRef.current.contains(e.target)) {
      setIsActive(false); // 콤보 박스 외부를 클릭했을 때 콤보 박스 닫기
      comboBoxRef.current.classList.remove('bottom');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // <ComboBox ref={comboBoxRef} className={className && className}>
    <ComboBox ref={comboBoxRef} className={className && className}>
      <div className={`styled-combo ${isActive ? 'isActive' : ''}`}>
        <div className={'combo-title'} onClick={handleCombo}>
          <div className={'title'}>{title}</div>
          <div className={'icon-arrow'}>
            <IconArrowType01 />
          </div>
        </div>
        {isActive && (
          <div className={'custom-select-box'}>
            <ul>
              {option.map((item, index) => (
                <li key={index} data-value={item.option} onClick={handleOptionClick}>
                  {item.option}
                  {item.name ? item.name : ''}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ComboBox>
  );
}

export default ComboBoxWrap;
