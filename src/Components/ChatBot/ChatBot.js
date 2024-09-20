import React, { useRef, useState } from 'react';
import Style from './ChatBotStyle';
import { IconAgent } from '../../assets/images/common/IconSet';

import WelecomeKiaImg2 from '../../assets/images/common/WelcomeKia2.gif';

const ChatBot = Style(APP_SKIN);

function AgentWrap({ children }) {
  const [agent, setAgent] = useState(true);

  return (
    <ChatBot className={'chat-bot'}>
      <div className={'icon'}>
        <div className={'img'}>
          <img src={WelecomeKiaImg2} alt="Kia ChatBot" />
        </div>
      </div>
      <div className={'item'}>{children && children}</div>
    </ChatBot>
  );
}

export default AgentWrap;
