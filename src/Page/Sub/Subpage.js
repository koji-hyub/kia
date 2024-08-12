import React from 'react';
import styled from 'styled-components';
import Accordion from '~/Components/Accordion/Accordion';
import Table from '~/Components/Table/Table';
import BorderSearch from '~/Components/BorderSearch/BorderSearch';
import Header from '../Layout/Header/Header';
import SubHeader from '../Layout/SubHeader/SubHeader';
import Path from '../../Components/Path/Path';

const Subpage = styled.div`
  padding: 20rem;
`;

const SubWarp = () => {
  // 아코디언
  const accItem = [
    { id: 1, title: '제목1', content: '아코디언 컨텐츠 영역 1' },
    { id: 2, title: '제목2', content: '아코디언 컨텐츠 영역 2' }
  ];

  // 테이블
  const tableItem = [
    {
      header: {
        cell1: {
          name: 'Name',
          align: '',
          col: ''
        },
        cell2: {
          name: 'Type',
          align: 'txt-l',
          col: '20%'
        },
        cell3: {
          name: 'Required/Optional',
          align: '',
          col: '20%'
        },
        cell4: {
          name: 'Example',
          align: '',
          col: '20%'
        },
        cell5: {
          name: 'Description',
          align: '',
          col: '20%'
        }
      },
      body: {
        content1: {
          details: {
            // text: { txt: 'Quer22Param1', align: '' },
            // text1: { txt: 'Que  aram1', align: '' },
            // text2: { txt: 'Quer123123aram1', align: 'txt-l' },
            // text3: { txt: 'ㅁㄴㅇㄹㅁㄴㅇ2Param1', align: '' },
            // text4: { txt: 'Query`122Param1', align: '' }
          }
        },
        content2: {
          details: {
            // text: { txt: 'Quer22Param1', align: '' },
            // text1: { txt: 'Que  aram1', align: '' },
            // text2: { txt: 'Quer123123aram1', align: 'txt-l' },
            // text3: { txt: 'ㅁㄴㅇㄹㅁㄴㅇ2Param1', align: '' },
            // text4: { txt: 'Query`122Param1', align: '' }
          }
        }
      }
    }
  ];

  return (
    <>
      <Header />
      <SubHeader title={'Open API 마켓'} text={'API를 이용해 다양한 서비스를 구현해보세요.'} />
      <Path />
      <div className={'container'}>
        {/*게시판 상단 검색 */}
        <BorderSearch />

        {/*아코디언*/}
        <Accordion setAcc={accItem} />
        {/*테이블 */}
        <Table tableItem={tableItem} />
      </div>
    </>
  );
};

export default SubWarp;
