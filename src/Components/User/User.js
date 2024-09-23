import React, { useState, useEffect, useRef } from 'react';
import Style from './UserStyle';
import Text from '../Text/Text';
import ButtonIcon from '../Button/ButtonIcon';
import { IconModifyCancel, IconSend, IconUserModify } from '../../assets/images/common/IconSet';

const User = Style(APP_SKIN);

function UserWrap(props) {
  const { children, text, userTooltip, setUserTooltip } = props;

  const toolTipRef = useRef(null);
  const textareaRef = useRef(null); // textarea에 대한 참조 생성

  const [modify, setModify] = useState(false);

  const handlePush = (e) => {
    setModify(!modify);
    console.log('메세지 수정');
  };

  const handleCancel = (e) => {
    setModify(!modify);
    console.log('메세지 수정 취소');
  };

  const handleModify = (e) => {
    setModify(!modify);
    if (userTooltip === true) {
      setUserTooltip(false);
    }
  };

  // textarea 높이 자동 조절 함수
  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // 높이를 초기화하여 스크롤이 생기지 않게 함
    textarea.style.height = `${Math.min(textarea.scrollHeight, 110)}px`; // 최대 높이를 110px로 제한
  };

  useEffect(() => {
    if (userTooltip) {
      setTimeout(() => {
        if (toolTipRef.current) {
          setUserTooltip(false);
        } // 툴팁을 숨김
      }, 3000);
    }
  }, [userTooltip, setUserTooltip]);

  return (
    <User>
      <div className={'message-box'}>
        <div className={'text-box'}>
          <div className={'tooltip'}>
            {!modify ? (
              <ButtonIcon icon={<IconUserModify />} blindText={'수정하기'} onClick={handleModify} />
            ) : null}
            {userTooltip && (
              <div className={'text'} ref={toolTipRef}>
                메세지 수정
              </div>
            )}
          </div>
          <div className="inner">
            <Text size={'--font-size-5'} color={'--Primary-Polar-White'} text={text && text} />
          </div>
        </div>

        {modify && (
          <div className={'modify'}>
            <textarea
              ref={textareaRef} // textarea에 ref 할당
              defaultValue={text}
              onInput={handleInput} // 입력 시 높이 자동 조정
              style={{ maxHeight: '60rem', overflow: 'hidden' }} // 최대 높이 및 스크롤 숨김
            />
            <div className={'btn-area'}>
              <ButtonIcon
                icon={<IconModifyCancel />}
                blindText={'수정취소'}
                onClick={handleCancel}
              />
              <ButtonIcon
                icon={<IconSend width={16} height={16} />}
                blindText={'수정하기'}
                onClick={handlePush}
              />
            </div>
          </div>
        )}
      </div>
      {children && children}
    </User>
  );
}

export default UserWrap;
