import React, { useRef, useState } from 'react';
import Style from './AgentStyle';
import Text from '../Text/Text';
import { IconAgent } from '../../assets/images/common/IconSet';

const Agent = Style(APP_SKIN);

function AgentWrap({ children, text }) {
  const [agent, setAgent] = useState(true);

  return (
    <Agent className={'agent'}>
      <div className={'icon'}>
        <IconAgent />
      </div>
      <div className={'item'}>
        <Text
          text={text && text}
          size={'--font-size-5, 14rem'}
          color={'--Primary-Midnight-Black'}
        />
      </div>
    </Agent>
  );
}

export default AgentWrap;
