import React, { useState } from 'react';
import Style from './TabMenuStyle';

const TabMenu = Style(APP_SKIN);

const TabMenuWrap = ({ tabMenu, initialTab = 0 }) => {
  const [currentTab, isCurrentTab] = useState(initialTab);

  const tabMemuHandler = (index) => {
    isCurrentTab(index);
  };

  return (
    <>
      <TabMenu>
        <div className={'tab'}>
          <ul>
            {tabMenu.map((item, index) => (
              <li
                key={item.id}
                className={index === currentTab ? 'tab-menu isActive ' : 'tab-menu '}
              >
                <button onClick={() => tabMemuHandler(index)}>{item.title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={'tab-content'}>
          <div className={'content'}>{tabMenu[currentTab].content}</div>
        </div>
      </TabMenu>
    </>
  );
};

export default TabMenuWrap;
