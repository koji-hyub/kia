import React, { useState } from 'react';
import Style from './MainStyle';
import User from '../../Components/User/User';
import ChatBot from '../../Components/ChatBot/ChatBot';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import Text from '../../Components/Text/Text';
import Heading from '../../Components/Heading/Heading';
import Button from '../../Components/Button/Button';
import { IconArrow } from '../../assets/images/common/IconSet';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const MainWrap = Style(APP_SKIN);

const listData = [
  {
    id: 1,
    title: (
      <Heading
        chip={'chip(선택)'}
        level={3}
        title={'자주 묻는 질문 TOP5'}
        size={'--font-size-4'}
        bold={'--font-weight-bold'}
      />
    ),
    subTitle: (
      <Text
        text={'Sub title(선택)'}
        size={'--font-size-7, 12px'}
        color={'--Grey-Spectrum-Coll-Grey-40, #9BA2A9'}
      />
    ),
    text: 'Kia Digital Key(NFC)란 무엇인가요?.',
    link: '/'
  }
];

const PubMain = () => {
  const [modifyBtn, setModifyBtn] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const [visibleItemsList, setVisibleItemsList] = useState(
    Array(listData.length).fill(5) // 각 슬라이드마다 초기에 5개씩만 노출
  );

  const handleShowMore = (index) => {
    const updatedVisibleItemsList = [...visibleItemsList];
    updatedVisibleItemsList[index] = listData.length; // 해당 슬라이드의 리스트 전체를 보여줌
    setVisibleItemsList(updatedVisibleItemsList);
  };

  return (
    <MainWrap>
      <MainSwiper>
        {listData.slice(0, 5).map(
          (
            items,
            slideIndex // 4개 슬라이드만 표시
          ) => (
            <SwiperSlide key={slideIndex}>
              <div className="list-item">
                <div className="title-item">
                  {items.title}
                  {items.subTitle}
                </div>
                <div className={'item-box'}>
                  <ul className={'item'}>
                    {listData.slice(0, visibleItemsList[slideIndex]).map((item, index) => (
                      <li key={item.id}>
                        <Link to={item.link}>
                          <span className={'num'}>{item.id}</span>
                          <p className={'text'}>{item.text}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {visibleItemsList[slideIndex] < listData.length && (
                    <Button
                      text={'더보기'}
                      iconRight={<IconArrow width={12} height={12} currentColor={'#636B74'} />}
                      size={'small'}
                      className={'text more-btn'}
                      onClick={() => handleShowMore(slideIndex)} // 해당 슬라이드의 더보기 버튼만 동작
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </MainSwiper>
    </MainWrap>
  );
};

export default PubMain;
