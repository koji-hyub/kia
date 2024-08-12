import React, { useState } from 'react';
import Style from './ApiBoxStyle';

const ApiBox = Style(APP_SKIN);

function ApiBoxWrap({ title, code }) {
  return (
    <ApiBox className={'code-area'}>
      <div className={'title'}>{title}</div>
      <div className={'code-box'}>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </ApiBox>
  );
}

export default ApiBoxWrap;
