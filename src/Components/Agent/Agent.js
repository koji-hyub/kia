import React, { useRef, useState } from 'react';
import Style from './AgentStyle';
import WelecomeKiaImg2 from '../../assets/images/common/WelcomeKia2.gif';
import Text from '../Text/Text';
import LoadingText from '../Loading/LoadingText';

const Agent = Style(APP_SKIN);

function AgentWrap({ children }) {
  const [agent, setAgent] = useState(true);

  return (
    <Agent>
      <div className={'icon-box'}>
        <div className={`icon bot`}>
          <div className={'img'}>
            <img src={WelecomeKiaImg2} alt="Kia ChatBot" />
          </div>
        </div>
      </div>

      {children && children}
    </Agent>
  );
}

export default AgentWrap;
