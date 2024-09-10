import React, { useRef, useState } from 'react';
import Style from './ChatBotStyle';
import { IconAgent } from '../../assets/images/common/IconSet';

const ChatBot = Style(APP_SKIN);

function AgentWrap({ children }) {
  const [agent, setAgent] = useState(true);

  return (
    <>
      <ChatBot>
        <div className={'icon-box'}>
          <div className={'icon agent'}>
            <IconAgent />
          </div>
        </div>
        {children}
      </ChatBot>
    </>
  );
}

export default AgentWrap;
