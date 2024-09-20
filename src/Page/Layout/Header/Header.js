import React, { useEffect, useRef, useState } from 'react';
import Style from './HeaderStyle';

import HeadingWrap from '~/Components/Heading/Heading';
import { IconLogo, IconClosed, IconLogOut } from '~/assets/images/common/IconSet';
import { IconDotMenu, IconState } from '../../../assets/images/common/IconSet';

const Header = Style(APP_SKIN);

function HeaderWrap(props) {
  const [state, setState] = useState(false);

  const [togglePopup, setTogglePopup] = useState(false);
  const [agent, setAgent] = useState(true);

  const handleTogglePopup = () => {
    setTogglePopup(!togglePopup);
  };

  const changeAgent = () => {
    setAgent(!agent);
    setTogglePopup(!togglePopup);
  };

  return (
    <Header>
      <div className="inner">
        <HeadingWrap
          level={1}
          iconLeft={<IconLogo width={60} height={14} />}
          title={'AI 어시스턴트'}
          bold={'bold'}
          size={'--font-size-4'}
          state={<IconState />}
        />
        <div className={'item-set'}>
          {agent && (
            <button type={'button'} onClick={handleTogglePopup}>
              <IconDotMenu width={24} height={24} />
              <span className={'blind'}>메뉴</span>
            </button>
          )}

          <button type={'button'}>
            <span className={'blind'}>채팅창 닫기</span>
            <IconClosed />
          </button>

          {togglePopup && (
            <div className={'toggle-popup'}>
              <ul>
                <li>
                  <button>새로고침</button>
                </li>
                <li>
                  <button onClick={changeAgent}>상담사 채팅</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Header>
  );
}

export default HeaderWrap;
