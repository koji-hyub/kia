import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LogoImg } from '~/assets/images/common/logo';
import Style from './HeaderStyle';

import HeadingWrap from '~/Components/Heading/Heading';
import { IconClosed, IconLogOut } from '~/assets/images/common/IconSet';

const Header = Style(APP_SKIN);

function HeaderWrap(props) {
  return (
    <Header>
      <div className="inner">
        <HeadingWrap
          level={1}
          iconLeft={<LogoImg />}
          title={'기아 AI 어시스턴트 '}
          state={'상담중'}
        />
        <div className={'item-set'}>
          <button type={'button'}>
            <span className={'blind'}>로그아웃</span>
            <IconLogOut width={'100%'} height={'100%'} />
          </button>
          <button type={'button'}>
            <span className={'blind'}>채팅창 닫기</span>
            <IconClosed />
          </button>
        </div>
      </div>
    </Header>
  );
}

export default HeaderWrap;
