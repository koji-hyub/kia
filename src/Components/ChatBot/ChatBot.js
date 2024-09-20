import React, { useRef, useState } from 'react';
import Style from './ChatBotStyle';
import { IconAgent } from '../../assets/images/common/IconSet';

const ChatBot = Style(APP_SKIN);

function AgentWrap({ children }) {
  const [agent, setAgent] = useState(true);

  return (
    <ChatBot>
      <div className={'icon'}>
        <IconAgent />
      </div>
      <div className={'item'}>{children && children}</div>
    </ChatBot>
  );
}

export default AgentWrap;
