import styled from 'styled-components/macro';

export const PageWrapper = styled.div`
  box-sizing: content-box;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
