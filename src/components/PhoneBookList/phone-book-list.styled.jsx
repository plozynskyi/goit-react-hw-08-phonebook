import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 40px;
`;

const ContactItem = styled(ListItem)``;

const CallContact = styled.a`
  text-decoration: none;
  color: inherit;
`;

export { ContactsList, ContactItem, CallContact };
