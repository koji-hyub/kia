import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// 코드하이라이트
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {
  prism,
  solarizedlight,
  tomorrow,
  xonokai,
  coy,
  dark,
  funky,
  okaidia,
  a11yDark,
  cb,
  vs
} from 'react-syntax-highlighter/dist/esm/styles/prism';
// jsx 언어 등록
SyntaxHighlighter.registerLanguage('jsx', jsx);

// import { IconCloseType01, IconCloseType02 } from '~/assets/images/common/IconCloseType';
import HeadingWrap from '~/Components/Heading/Heading';
import Button from '~/Components/Button/Button';
import Checkbox from '~/Components/Checkbox/Checkbox';
import Radio from '~/Components/Radio/Radio';
import Text from '~/Components/Text/Text';
import TabMenuWrap from '../Components/TabMenu/TabMenu';
// import Input from '../Components/MessageInput/MessageInput';
import ComboBox from '../Components/ComboBox/ComboBox';
//import Popup from '../Components/Popup/Popup';
import Header from './Layout/Header/Header';
// import Footer from './Layout/Message/_Message';
import Badge from '../Components/Etc/Badge';
import HashTag from '../Components/QuickReplies/QuickReplies';
// import { SwiperSlide } from 'swiper/react';
import MainSwiper from '../Components/Swiper/MainSwiper';
import Table from '../Components/Table/Table';
import { LogoImg } from '../assets/images/common/logo';
import HamburgerMenu from '../Components/HamburgerMenu/HamburgerMenu';
import Accordion from '../Components/Accordion/Accordion';
import Loading from '../Components/Loading/Loading';
import QuickMenu from '../Components/QuickMenu/QuickMenu';
import Style from './Main/MainStyle';
import Message from './Layout/Message/Message';
const MainWrap = Style(APP_SKIN);

// 탭 메뉴 배열
const tabMenu = [
  {
    id: 1,
    title: '탭 메뉴 1',
    content: <HeadingWrap level={3} title={'h1~h6 헤딩 각 레벨별 타이틀제공 컴포넌트 '} />
  },
  { id: 2, title: '탭 메뉴 2', content: '메인에서 탭 메뉴 컨텐츠 2' },
  { id: 3, title: '탭 메뉴 3', content: '메인에서 탭 메뉴 컨텐츠 3' }
];

const comboItem = [
  {
    data: 'option 1',
    option: 'option 1',
    name: '홍*동'
  },
  { data: 'option 2', option: 'option 2', name: '홍*동' },
  { data: 'option 3', option: 'option 3', name: '장*순' },
  { data: 'option 4', option: 'option 4', name: '민*길' },
  { data: 'option 5', option: 'option 5' }
];

// 더미 데이터 생성
const tableItem = [
  {
    header: {
      name: { name: '이름', align: 'left', col: '150px' },
      age: { name: '나이', align: 'center', col: '50px' },
      location: { name: '위치', align: 'right', col: '200px' }
    },
    body: {
      content1: {
        details: {
          name: { txt: '홍길동', align: 'left' },
          age: { txt: '25', align: 'center' },
          location: { txt: '서울', align: 'right' }
        }
      },
      content2: {
        details: {
          name: { txt: '김영희', align: 'left' },
          age: { txt: '30', align: 'center' },
          location: { txt: '부산', align: 'right' }
        }
      },
      content3: {
        details: {
          name: { txt: '이철수', align: 'left' },
          age: { txt: '28', align: 'center' },
          location: { txt: '대구', align: 'right' }
        }
      }
    }
  }
];

const AccordionDummyData = [
  {
    title: 'Accordion Item 1',
    content:
      'Content for Accordion Item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Accordion Item 2',
    content: 'Content for Accordion Item 2. Integer in justo nec urna cursus vehicula.'
  },
  {
    title: 'Accordion Item 3',
    content: 'Content for Accordion Item 3. Sed tristique dui id sapien elementum.'
  },
  {
    title: 'Accordion Item 4',
    content: 'Content for Accordion Item 4. Nunc cursus libero a magna congue.'
  }
];

const popup = {
  title: '팝업 타이틀',
  size: 'large',
  className: 'bottom',
  content:
    '팝업은 기본 large와 samll제ㅐ공 팝업의 높이는 content 클래스의 max-height값을 세팅하고 사이즈와 디자인은 별도의 클래스를 지정해서 작성한다.'
};

const isError = true;

const Guide = () => {
  // 팝업 관련
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(!isOpen);
  };
  const closedPopup = () => {
    setIsOpen(!isOpen);
  };

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // 키패드가 올라올 때 window height 조정
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div style={{ height: windowHeight, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <MainWrap>
        <div className="section">
          {/*<HeadingWrap level={3} title={'스와이퍼'} />*/}
          <MainSwiper />
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {`<MainSwiper />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap
            level={3}
            state={'텍스트'}
            iconLeft={
              <div
                style={{
                  width: '90rem',
                  marginRight: '5px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <LogoImg />
              </div>
            }
            title={'h1~h6 헤딩 각 레벨별 타이틀제공 컴포넌트 '}
            color={'--Primary-Midnight-Black'}
          />

          <SyntaxHighlighter language="jsx" style={prism}>
            {`<HeadingWrap 
  level={3}
  state={'텍스트'}
  iconLeft={
    <div
      style={{
        color: 'blue',
        width: '90rem',
        marginRight: '5px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <LogoImg />
    </div>
  }
  title={'텍스트 줄 바꿈은 \\n 를 이용하여 줄바꿈을 제공 '}
 />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap color={'--Primary-Midnight-Black'} level={3} title={'로딩'} />
          <Loading />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Loading />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'햄버거 메뉴'} />
          <HamburgerMenu />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<HamburgerMenu />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'텍스트 컴포넌트'} />
          <div>
            <Text
              iconLeft={
                <div
                  style={{
                    color: 'blue',
                    width: '90rem',
                    marginRight: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <LogoImg />
                </div>
              }
              size={'large'}
              color={'--Primary-Midnight-Black'}
              text={`이 텍스트는 첫 번째 줄입니다. 이 텍스트는 첫 번째 줄입니다. 이 텍스트는 첫 번째 줄입니다. \n이 텍스트는 두 번째 줄입니다.`}
            />
            <Text
              size={'medium'}
              color={'--Primary-Midnight-Black'}
              text={
                '그래픽 요소나 시각적 연출을 보여줄 때 젝트 모형의 채움 글로도 이용된다. 더미 텍스트 입니다. '
              }
            />
            <Text
              size={'small'}
              text={
                '그래픽 요소나 시각적 연출을 보여줄 때 젝트 모형의 채움 글로도 이용된다. 더미 텍스트 입니다. '
              }
            />
          </div>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`// 텍스트 컴포넌트 
<Text size={'large'} text={'그래픽 요소나 시각적 연출을 보여줄 때 젝트 모형의 채움 글로도 이용된다. 더미 텍스트 입니다.'} />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'테이블'} />
          <Table tableItem={tableItem} scroll={false} />

          <SyntaxHighlighter language="jsx" style={prism}>
            {`
// 더미 데이터 생성
const tableItem = [
  {
    header: {
      name: { name: '이름', align: 'left', col: '150px' },
      age: { name: '나이', align: 'center', col: '50px' },
      location: { name: '위치', align: 'right', col: '200px' }
    },
    body: {
      content1: {
        details: {
          name: { txt: '홍길동', align: 'left' },
          age: { txt: '25', align: 'center' },
          location: { txt: '서울', align: 'right' }
        }
      },
    }
  }
];
`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`// 테이블 내에 스크롤 생성시 true
 <Table tableItem={tableItem} scroll={false} />
`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'Accordion'} />

          <Accordion setAcc={AccordionDummyData} />

          <SyntaxHighlighter language="jsx" style={prism}>
            {`팝업 컴포넌트를 만들어 보자`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'팝업 컴포넌트'} />
          <Button size={'small'} text={'팝업 호출 버튼 '} onClick={openPopup} />
          {/*{isOpen && (*/}
          {/*  <Popup*/}
          {/*    onClick={closedPopup}*/}
          {/*    title={popup.title}*/}
          {/*    content={popup.content}*/}
          {/*    size={popup.size}*/}
          {/*    className={isOpen ? `isActive ${popup.className}` : popup.className}*/}
          {/*  />*/}
          {/*)}*/}
          <SyntaxHighlighter language="jsx" style={prism}>
            {`팝업 컴포넌트를 만들어 보자`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'배지모음'} />
          <Badge className={'badge01'} text={'배지1'} />
          <Badge className={'badge02'} text={'배지2'} />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Badge className={'badge01'} text={'배지1'} />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'해시태그'} />
          <HashTag tag={'태그명'} />
          <HashTag tag={'태그명'} />
          <HashTag tag={'태그명'} />
          <SyntaxHighlighter language="jsx" style={prism}></SyntaxHighlighter>
        </div>
        <div className="section">
          {/*버튼 */}
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'Button'} />
          <div>
            <Button className={'secondary'} size={'large'} text={'Button'} />
            <Button className={'tertiary'} size={'large'} text={'Button'} />
            <Button className={'text'} size={'large'} text={'Button'} />
          </div>
          <div>
            <Button className={'secondary'} size={'small'} text={'Button'} />
            <Button className={'tertiary'} size={'small'} text={'Button'} />
            <Button className={'text'} size={'small'} text={'Button'} />
          </div>
          <div>
            <Button
              className={'secondary'}
              size={'small'}
              disabled={true}
              text={'Button Disabled'}
            />
            <Button
              className={'tertiary'}
              size={'small'}
              disabled={true}
              text={'Button Disabled'}
            />
            <Button className={'text'} size={'small'} disabled={true} text={'Button Disabled'} />
          </div>

          <SyntaxHighlighter language="jsx" style={prism}>
            {`/**
 * - text: String
 * - onClick: function
 * - iconLeft, iconRight: Element  
 * - className: 'primary', 'secondary', 'tertiary', 'text'  // Button Style
 * - size: 'small', 'large' // Button Size 
 * - disabled: Boolean  
 **/
 
  <Button
    className={'primary'}
    size={'small'}
    disabled={false}
    text={'Button Disabled'}
  />
 `}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'CheckBox'} />
          <div>
            <Checkbox label={'체크박스'} />
            <Checkbox label={'체크박스'} />
            <Checkbox label={'체크박스'} disabled={true} />
            <Checkbox label={'체크박스'} defaultChecked={true} disabled={true} />
          </div>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`<Checkbox label={'체크박스1'} defaultChecked={true} disabled={true} />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'RadioButton'} />
          <div>
            <Radio label={'라디오버튼'} name={'na1'} />
            <Radio label={'라디오버튼'} name={'na1'} />
            <Radio label={'라디오버튼'} disabled={true} />
            <Radio label={'라디오버튼'} defaultChecked={true} disabled={true} />
          </div>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`// 라디오버튼 컴포넌트 
<Radio name={'na1'} label={'라디오버튼'} defaultChecked={true} disabled={true} />`}
          </SyntaxHighlighter>
        </div>

        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'ComboBox'} />
          <div>
            <ComboBox title={'콤보박스 타이틀'} option={comboItem} />
          </div>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`// 콤보박스 컴포넌트 
<ComboBox title={'콤보박스 타이틀'} option={comboItem} />`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <HeadingWrap level={3} color={'--Primary-Midnight-Black'} title={'TabMenu'} />
          <div>
            <TabMenuWrap tabMenu={tabMenu} initialTab={1} />
          </div>
          <SyntaxHighlighter language="jsx" style={prism}>
            {`// 텍스트 컴포넌트 
<TabMenuWrap tabMenu={tabMenu} initialTab={1} />`}
          </SyntaxHighlighter>
        </div>
        {/*<div style={{ color: 'red', width: '50rem' }}>*/}
        {/*  <IconCloseType01 />*/}
        {/*</div>*/}
        {/*<div style={{ color: 'blue', width: '50rem' }}>*/}
        {/*  <IconCloseType02 />*/}
        {/*</div>*/}
      </MainWrap>
      <QuickMenu />
      <Message />
    </div>
  );
};

export default Guide;
