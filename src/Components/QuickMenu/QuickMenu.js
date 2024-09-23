import React, { useEffect, useRef, useState } from 'react';
import Style from './QuickMenuStyle';
import { IconArrow, IconQuick } from '../../assets/images/common/IconSet';
import { Link } from 'react-router-dom';

const QuickMenu = Style(APP_SKIN);

function QuickMenuWrap(props) {
  const [isQuick, setIsQuick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!document.querySelector('.login-wrap')) {
        if (scrollY == 0) {
          setIsQuick(false);
        } else {
          setIsQuick(true);
        }
      }
    };

    // 스크롤 이벤트를 window에 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleTop = (e) => {
    const _this = e.currentTarget;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    _this.closest('.quick').style.transaction = 'all .5s ease';
  };
  return (
    isQuick && (
      <QuickMenu className={'quick'}>
        <ul>
          <li>
            <button onClick={handleTop}>
              <IconArrow />
              <span className="blind">페이지상단으로</span>
            </button>
          </li>
          {/*<li>*/}
          {/*  <Link href={'javascript: void(0)'}>*/}
          {/*    <IconQuick />*/}
          {/*    <span className="blind">페이지상단으로</span>*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </QuickMenu>
    )
  );
}

export default QuickMenuWrap;
