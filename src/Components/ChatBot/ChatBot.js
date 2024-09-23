import React, { useEffect, useRef, useState } from 'react';
import Style from './ChatBotStyle';
import { IconAgent, IconRefresh, IconUserModify } from '../../assets/images/common/IconSet';

import WelecomeKiaImg2 from '../../assets/images/common/WelcomeKia2.gif';
import User from '../User/User';
import ButtonIcon from '../Button/ButtonIcon';
import Text from '../Text/Text';
import ContentItem from '../ContentItem/ContentItem';

const ChatBot = Style(APP_SKIN);

function AgentWrap({ text, children, agentTooltip, setAgentTooltip }) {
  const [agent, setAgent] = useState(true);
  const toolTipRef = useRef(null);
  useEffect(() => {
    if (agentTooltip) {
      setTimeout(() => {
        if (toolTipRef.current) {
          setAgentTooltip(false);
        } // 툴팁을 숨김
      }, 3000);
    }
  }, [agentTooltip, setAgentTooltip]);
  return (
    <ChatBot className={'chat-bot'}>
      <div className={'icon'}>
        <div className={'img'}>
          <img src={WelecomeKiaImg2} alt="Kia ChatBot" />
        </div>
      </div>
      <div className={'item'}>
        {children ? (
          children
        ) : (
          <div className={'text-box'}>
            <Text className={'text'} text={text && text} />
            <div className={'tooltip'}>
              <ButtonIcon icon={<IconRefresh />} blindText={'새로고침'} className={'refresh'} />

              {agentTooltip && (
                <div className={'text'} ref={toolTipRef}>
                  답변 재생성 요청
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ChatBot>
  );
}

export default AgentWrap;
