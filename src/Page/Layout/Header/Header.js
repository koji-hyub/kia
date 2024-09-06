import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './HeaderStyle';

import HeadingWrap from '~/Components/Heading/Heading';
import { IconLogo, IconLogOut } from '~/assets/images/common/IconSet';

const Header = Style(APP_SKIN);

function HeaderWrap(props) {
  const [state, setState] = useState(false);

  return (
    <Header>
      <div className="inner">
        <HeadingWrap
          level={1}
          iconLeft={<IconLogo width={60} height={14} />}
          title={'AI 어시스턴트'}
          bold={'bold'}
          size={'--font-size-4'}
          state={state ? state : '상담중'}
        />
        <div className={'item-set'}>
          <button type={'button'}>
            <IconLogOut width={'100%'} height={'100%'} />
            <span className={'blind'}>로그아웃</span>
          </button>
          {/*<button type={'button'}>*/}
          {/*  <span className={'blind'}>채팅창 닫기</span>*/}
          {/*  <IconClosed />*/}
          {/*</button>*/}
        </div>
      </div>
    </Header>
  );
}

export default HeaderWrap;
