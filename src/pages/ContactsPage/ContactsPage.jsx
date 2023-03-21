import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PageviewIcon from '@mui/icons-material/Pageview';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhoneBookList from 'components/PhoneBookList/PhoneBookList';
import PhoneBookFilter from 'components/PhoneBookFilter/PhoneBookFilter';
import PhoneBooksForm from 'components/PhoneBookForm/PhoneBookForm';
import Loader from '../../shared/Loader/Loader';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import {
  getFilteredContacts,
  loading,
  error,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import { MainSection, ContactsTitle } from './ContactsPage.styled';

const ContactsPage = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContacts = ({ name, number }) => {
    dispatch(addContact({ name, number }));
    if (isError) {
      toast.error(
        `The limit has been exceeded. You can only add 100 contacts!`
      );
    }
  };

  const removeContacts = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  const isContacts = Boolean(filteredContacts.length);

  return (
    <MainSection>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ContactsTitle>
            <AddIcCallIcon />
            <Typography>Add contact</Typography>
          </ContactsTitle>
        </AccordionSummary>
        <AccordionDetails>
          <PhoneBooksForm onSubmit={addContacts} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <ContactsTitle>
            <PageviewIcon />
            <Typography>Find contact</Typography>
          </ContactsTitle>
        </AccordionSummary>
        <AccordionDetails>
          <PhoneBookFilter value={filter} handleChange={handleFilter} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <ContactsTitle>
            <Stack spacing={5} direction="row">
              <Badge
                color="secondary"
                badgeContent={filteredContacts.length}
                showZero
              >
                <ContactPhoneIcon />
              </Badge>
            </Stack>
            <Typography>Contacts</Typography>
          </ContactsTitle>
        </AccordionSummary>
        <AccordionDetails>
          {isLoading && <Loader />}
          {isContacts && (
            <PhoneBookList
              items={filteredContacts}
              removeContacts={removeContacts}
            />
          )}
          {!isContacts && <p>No contacts in list</p>}
        </AccordionDetails>
      </Accordion>
    </MainSection>
  );
};

export default ContactsPage;
