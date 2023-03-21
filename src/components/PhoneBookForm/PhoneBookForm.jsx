import { useState } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';
import fields from './fields';
import InputField from 'components/TextField/InputField';

import { Button } from '@mui/material';
import { PhoneBookForm, InputWrapper } from './phone-book-form.styled';

const PhoneBooksForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <PhoneBookForm action="" onSubmit={handleSubmit}>
      <InputWrapper>
        <InputField
          fullWidth
          size="small"
          sx={{}}
          value={name}
          onChange={handleChange}
          {...fields.name}
          margin="dense"
        />
      </InputWrapper>
      <InputWrapper>
        <InputField
          fullWidth
          size="small"
          sx={{ marginTop: '15px' }}
          value={number}
          onChange={handleChange}
          {...fields.number}
          margin="dense"
        />
      </InputWrapper>
      <Button sx={{ marginTop: '15px' }} variant="contained" type="submit">
        Add contact
      </Button>
    </PhoneBookForm>
  );
};

export default PhoneBooksForm;

PhoneBooksForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
