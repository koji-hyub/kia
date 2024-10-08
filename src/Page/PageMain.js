import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '~/Page/Layout/Header/Header';
import Message from '~/Page/Layout/Message/Message';
import Main from '~/Page/Main/Main';

const PageMain = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // 키패드가 올라올 때 window height 조정
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: windowHeight, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Main />
      <Message />
    </div>
  );
};

export default PageMain;
