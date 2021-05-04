import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import Button from '@material-ui/core/Button';
import { NavBar } from 'app/components/NavBar';

export const CounterPage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Counter page</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <div className="mb-2">{count}</div>
        <Button
          className="mb-2"
          variant="contained"
          color="primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Counter + 1
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset counter
        </Button>
      </PageWrapper>
    </>
  );
};
