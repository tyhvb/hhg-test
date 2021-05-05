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
      <ButtonWrapper
        onClick={goToCounterPage}
        className="mr-3"
        size="small"
        variant="outlined"
        color="primary"
      >
        Go to counter page
      </ButtonWrapper>
      <ButtonWrapper
        onClick={goToEmployeePage}
        size="small"
        variant="outlined"
        color="primary"
      >
        Go to employee page
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
`;

const ButtonWrapper = styled(Button)`
  height: 35px;
`;
