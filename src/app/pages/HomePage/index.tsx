import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  counterContainer: {
    marginBottom: '10px',
  },
  increaseCounterContainer: {
    marginBottom: '10px',
  },
});

export function HomePage() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <PageWrapper>
        <div className={classes.counterContainer}>{count}</div>
        <Button
          className={classes.increaseCounterContainer}
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
}
