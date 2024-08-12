import React, { useEffect, useState } from 'react';
import Style from './SearchBoxStyle';
import { Link } from 'react-router-dom';
import { IconSearch } from '../../assets/images/common/IconSet';

const SearchBox = Style(APP_SKIN);

function SearchBoxWrap(props) {
  return (
    <SearchBox className={'search-wrap'}>
      <div className="inner">
        <input type="text" placeholder={'찾고 싶은 API를 검색해 보세요.'} />
        <button>
          <IconSearch />
          <span className={'blind'}>검색</span>
        </button>
      </div>
      <div className={'bets-tag'}>
        <p className={'tit'}>인기검색어</p>
        <div className={'tag'}>
          <Link>#대출</Link>
          <Link>#1원이체인증</Link>
          <Link>#금리한도조회</Link>
        </div>
      </div>
    </SearchBox>
  );
}

export default SearchBoxWrap;
