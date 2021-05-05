import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import Button from '@material-ui/core/Button';
import { NavBar } from 'app/components/NavBar';
import styled from 'styled-components/macro';

export const CounterPage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Counter page</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <CounterDisplay>{count}</CounterDisplay>
        <div className="d-flex">
          <Button
            className="mr-3"
            size="medium"
            variant="contained"
            color="primary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </Button>
        </div>
      </PageWrapper>
    </>
  );
};

const CounterDisplay = styled.div`
  font-size: 60px;
`;
