import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
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

import {
  MainSection,
  FormBox,
  PhoneBookTitle,
  ContactsBox,
  ContactsTitle,
} from './ContactsPage.styled';

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
    <>
      <MainSection>
        <FormBox>
          <PhoneBookTitle>Phonebook</PhoneBookTitle>
          <PhoneBooksForm onSubmit={addContacts} />
        </FormBox>
        <ContactsBox>
          <ContactsTitle>Contacts</ContactsTitle>
          <PhoneBookFilter value={filter} handleChange={handleFilter} />
          {isLoading && <Loader />}
          {isContacts && (
            <PhoneBookList
              items={filteredContacts}
              removeContacts={removeContacts}
            />
          )}
          {!isContacts && <p>No contacts in list</p>}
        </ContactsBox>
        <ToastContainer theme="light" autoClose={3000} />
      </MainSection>
    </>
  );
};

export default ContactsPage;
