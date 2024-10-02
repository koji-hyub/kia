import React, { useState } from 'react';
import Style from './MainStyle';
import User from '../../Components/User/User';
import ChatBot from '../../Components/ChatBot/ChatBot';
import MainSwiper from '../../Components/Swiper/MainSwiper';
import Text from '../../Components/Text/Text';
import Heading from '../../Components/Heading/Heading';
import Button from '../../Components/Button/Button';
import { IconArrow, IconLink } from '../../assets/images/common/IconSet';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import ContentItem from '../../Components/ContentItem/ContentItem';
import ButtonLink from '../../Components/Button/ButtonLink';
import QuickReplies from '../../Components/QuickReplies/QuickReplies';
import ImageBox from '../../Components/ImageBox/ImageBox';
import ListItem from '../../Components/ListItem/ListItem';
import ListItemLink from '../../Components/ListItem/ListItemLink';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';

const MainWrap = Style(APP_SKIN);

const PubMain = () => {
  return (
    <MainWrap>
      <Loading />
    </MainWrap>
  );
};

export default PubMain;
