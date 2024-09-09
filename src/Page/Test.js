import React, { useState, useEffect, useRef } from 'react';
import Header from './Layout/Header/Header';
import Main from '~/Page/Main/Main';
// import Message from './Layout/Message/_Message';
import Message from './Layout/Message/Message';

const ChatApp = () => {
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

export default ChatApp;
