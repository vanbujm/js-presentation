import styled from '@emotion/styled';

export const GetCodeButton = styled.button`
  background: rgba(255, 0, 106, 0.82);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  border: none;
  font-family: 'Oxygen', Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: rgba(51, 51, 51, 0.94);
  font-size: 2rem;
  padding: 1rem;
  border-radius: 20px;

  &:hover {
    box-shadow: none;
  }
  &:active {
    box-shadow: inset 0px 8px 15px rgba(0, 0, 0, 0.4);
  }
`;
