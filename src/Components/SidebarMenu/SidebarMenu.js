import React, { useState, useEffect } from 'react';
import Style from './SidebarMenuStyle';
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';
import { IconArrow } from '../../assets/images/common/IconSet';

const SideMenu = Style(APP_SKIN);

function SidebarMenu({}) {
  const [openMenuId, setOpenMenuId] = useState(null); // 열린 메뉴의 ID를 저장하는 상태
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 모바일 메뉴의 열림 상태를 저장하는 상태
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggleMenu = (id) => {
    setOpenMenuId((prevId) => {
      // 클릭한 메뉴가 이미 열려있다면 닫고, 아니면 열기
      return prevId === id ? null : id;
    });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 윈도우의 너비 변화를 감지하는 이벤트 핸들러
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 윈도우의 너비 변화 이벤트 리스너를 추가
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 리스너를 제거하여 메모리 누수를 방지
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행되도록 빈 배열을 전달

  const menuItem = [
    {
      id: 1,
      menu: {
        oneDepth: '첫 번째 메뉴',
        twoDepth: ['서브 메뉴명 1', '서브 메뉴명 2', '서브 메뉴명 3']
      }
    },
    {
      id: 2,
      menu: {
        oneDepth: '두 번째 메뉴'
        // twoDepth: ['서브 메뉴명 1', '서브 메뉴명 2', '서브 메뉴명 3']
      }
    },
    {
      id: 3,
      menu: {
        oneDepth: '세 번째 메뉴',
        twoDepth: ['서브 메뉴명 1', '서브 메뉴명 2', '서브 메뉴명 3']
      }
    },
    {
      id: 4,
      menu: {
        oneDepth: '네 번째 메뉴',
        twoDepth: ['서브 메뉴명 1', '서브 메뉴명 2', '서브 메뉴명 3']
      }
    },
    {
      id: 5,
      menu: {
        oneDepth: '네 번째 메뉴'
        // twoDepth: ['서브 메뉴명 1', '서브 메뉴명 2', '서브 메뉴명 3']
      }
    }
  ];
  return (
    <SideMenu className={'side-menu'}>
      <div className={'top-title'} onClick={handleMobileMenuToggle}>
        <Heading level={3} title={'KIA'} />
        {windowWidth < 1280 && (
          <span className={isMobileMenuOpen ? 'open' : 'closed'}>
            <IconArrow />
          </span>
        )}
      </div>
      {(windowWidth > 1280 || isMobileMenuOpen) && (
        <div className={'inner'}>
          <ul className={'oneDepth'}>
            {menuItem.map((item, index) => (
              <li key={index}>
                <Link
                  href={'javascript:void (0)'}
                  className={item.id === openMenuId ? 'isActive' : ''}
                  onClick={() => handleToggleMenu(item.id)}
                >
                  {item.menu.oneDepth}
                  {item.menu.twoDepth == null ? '' : <IconArrow />}
                </Link>
                {openMenuId === item.id && ( // 현재 열린 메뉴인 경우에만 하위 메뉴 렌더링
                  <ul className={'twoDepth'}>
                    {item.menu.twoDepth &&
                      item.menu.twoDepth.map((subMenu, subIndex) => (
                        <li key={subIndex}>
                          <Link href={'javascript:void (0)'}>{subMenu}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </SideMenu>
  );
}

export default SidebarMenu;
