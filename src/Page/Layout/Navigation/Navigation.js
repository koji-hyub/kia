import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './NavigationStyle';

const Menu = Style(APP_SKIN);
function Navigation(props) {
  const navigation = [
    { path: '/Guide', menu: '공통가이드' },
    { path: '/', menu: '메인페이지' },
    { path: '/CallPopup', menu: '팝업 호출' },
    { path: '/Test', menu: '테스트' }
  ];

  const [open, isOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const openRef = useRef();

  const handleOpen = () => {
    isOpen(!open);
    const _this = openRef.current;
    const winH = window.innerHeight; // 윈도우 높이
    _this.closest('body').style.overflow = 'hidden';
    _this.querySelector('.inner').style.height = 100 + '%';
    if (_this.querySelector('.aside-menu').classList.contains('isActive')) {
      _this.closest('body').style.overflow = 'unset';
    }
  };

  const handleClick = (index) => {
    setActiveIndex(index);

    // 이벤트 후 좌측 사이드 메뉴 닫기 이벤트
    isOpen(!open);
    document.querySelector('body').style.overflow = 'unset';
  };

  return (
    <>
      <Menu ref={openRef}>
        <div className={`aside-menu ${open ? 'isActive' : ''}`}>
          <button className={`open ${open ? 'closed' : ''} `} onClick={handleOpen}>
            <span className={'blind'}>버튼</span>
          </button>

          <div className={'inner'}>
            <ul>
              {navigation.map((item, index) => (
                <li key={index} className={index === activeIndex ? 'isActive' : ''}>
                  <Link to={`${item.path}`} onClick={() => handleClick(index)}>
                    {item.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Menu>
    </>
  );
}

export default Navigation;
