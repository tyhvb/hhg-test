import * as React from 'react';
import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const Nav = () => {
  const history = useHistory();

  const goToCounterPage = () => {
    history.push('/counter');
  };

  const goToEmployeePage = () => {
    history.push('/employees');
  };

  return (
    <Wrapper>
      <Button
        onClick={goToCounterPage}
        className="mr-3"
        size="small"
        variant="outlined"
        color="primary"
      >
        Go to counter page
      </Button>
      <Button
        onClick={goToEmployeePage}
        size="small"
        variant="outlined"
        color="primary"
      >
        Go to employee page
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
`;
