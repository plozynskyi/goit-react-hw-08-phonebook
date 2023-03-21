import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 40px;
`;

const RemoveBtn = styled.button`
  border: 1px solid gray;
  border-radius: 15px;
  background-color: inherit;
  margin-left: 15px;
  :hover {
    color: rgba(0, 0, 255, 0.5);
    border: 1px solid rgba(0, 0, 255, 0.5);
  }
  :active {
    color: #fff;
    border: 1px solid red;
    background-color: red;
  }
`;

const ContactItem = styled(ListItem)``;

const CallContact = styled.a`
  text-decoration: none;
  color: inherit;
`;

export { ContactsList, ContactItem, RemoveBtn, CallContact };
