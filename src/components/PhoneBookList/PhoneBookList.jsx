import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import List from '@mui/material/List';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

import { ContactItem, CallContact } from './phone-book-list.styled';

const PhoneBookList = ({ removeContacts, items }) => {
  const contacts = items.map(({ id, name, number }) => (
    <ContactItem
      button={true}
      href={`tel:${number}`}
      key={id}
      secondaryAction={
        <IconButton
          onClick={() => removeContacts(id)}
          type="button"
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <CallContact href={`tel:${number}`}>
        <ListItemText primary={name} secondary={number ? number : null} />
      </CallContact>
    </ContactItem>
  ));

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <List>{contacts}</List>
      </Grid>
    </Box>
  );
};

export default PhoneBookList;

PhoneBookList.defaultProps = {
  items: [],
};

PhoneBookList.propTypes = {
  removeContacts: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
