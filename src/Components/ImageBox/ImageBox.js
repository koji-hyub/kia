import React from 'react';

import Style from './ImageBoxStyle';
import { Link } from 'react-router-dom';
import { IconNoImage } from '../../assets/images/common/IconSet';

const ImageBox = Style(APP_SKIN);
function HashtagWrap(props) {
  const { img } = props;
  return <ImageBox>{img ? img : <IconNoImage />}</ImageBox>;
}

export default HashtagWrap;
