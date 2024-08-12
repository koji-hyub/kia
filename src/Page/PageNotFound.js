import React from 'react';

import styled from 'styled-components';

const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PageNotFound = () => {
  return (
    <>
      <NotFound>
        <div>페이지 없음 돌아가시오.</div>
      </NotFound>
    </>
  );
};

export default PageNotFound;
