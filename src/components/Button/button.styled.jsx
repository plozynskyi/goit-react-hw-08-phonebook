import styled from '@emotion/styled';

const ButtonMain = styled.button`
  display: inline-block;
  padding: 10px 15px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 5px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  cursor: pointer;
  width: 100px;
  font-size: 14px;
  font-weight: bold;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: coral;
    border: 2px solid coral;
  }
`;

export { ButtonMain };
