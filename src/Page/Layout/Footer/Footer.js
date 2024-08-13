import React from 'react';
import { Link } from 'react-router-dom';
import Style from './FooterStyle';

const Footer = Style(APP_SKIN);

function FooterWrap() {
  return (
    <Footer>
      <div className="inner">
        <div>© Kia Corporation</div>
      </div>
    </Footer>
  );
}
export default FooterWrap;
