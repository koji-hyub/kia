import React from 'react';
import Style from './BorderSearchStyle';
import Input from '../Input/Input';

const BorderSearch = Style(APP_SKIN);
function BorderSearchWrap(props) {
  return (
    <BorderSearch>
      <div className={'inner'}>
        <Input
          id={'search'}
          placeholder={'제목/내용'}
          name={'search'}
          type={'text'}
          className={'search'}
        />

        <div className={'total'}>
          총 게시물 <span>200</span>건
        </div>
      </div>
    </BorderSearch>
  );
}

export default BorderSearchWrap;
