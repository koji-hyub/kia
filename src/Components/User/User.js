import React, { useEffect, useRef } from 'react';
import Style from './UserStyle';
import Text from '../Text/Text';
import Button from '../Button/Button';
import {
  IconAgent,
  IconModifyCancel,
  IconSend,
  IconUserModify
} from '../../assets/images/common/IconSet';
import ButtonIcon from '../Button/ButtonIcon';

const User = Style(APP_SKIN);

function UserWrap(props) {
  const { children, text, userTooltip, setUserTooltip } = props;

  const toolTipRef = useRef(null);

  const [modify, setModify] = React.useState(false);
  const handleModify = () => {
    setModify(!modify);
  };

  useEffect(() => {
    if (userTooltip) {
      setTimeout(() => {
        if (toolTipRef.current) {
          setUserTooltip(false); //
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
            ) : (
              ''
            )}
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
            <textarea defaultValue={text}></textarea>
            <div className={'btn-area'}>
              <ButtonIcon
                icon={<IconModifyCancel />}
                blindText={'수정취소'}
                onClick={handleModify}
              />

              <ButtonIcon
                icon={<IconSend width={16} height={16} />}
                blindText={'수정하기'}
                onClick={handleModify}
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
