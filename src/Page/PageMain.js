import React, { useState } from 'react';

import Header from '~/Page/Layout/Header/Header';
import Footer from '~/Page/Layout/Footer/Footer';

import Main from '~/Page/Main/Main';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  > div:nth-child(1) {
    flex: 0 0 56rem;
  }
  > div:nth-child(2) {
    flex: 2;
  }
  > div:nth-child(3) {
    flex: 0 0 56rem;
  }
`;

const PageMain = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Main />
        <Footer />
      </Wrap>
    </>
  );
};

export default PageMain;
