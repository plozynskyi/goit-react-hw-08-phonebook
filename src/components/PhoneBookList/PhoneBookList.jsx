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
  const contacts = items.map(({ _id, name, phone }) => (
    <ContactItem
      button={true}
      href={`tel:${phone}`}
      key={_id}
      secondaryAction={
        <IconButton
          onClick={() => removeContacts(_id)}
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
      <CallContact href={`tel:${phone}`}>
        <ListItemText primary={name} secondary={phone ? phone : null} />
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
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
