import PropTypes from 'prop-types';

import useForm from 'shared/hooks/useForm';
import InputField from 'components/TextField/InputField';
import initialState from './initialState';
import fields from './fields';

import { Button } from '@mui/material';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        sx={{ width: '350px' }}
        value={name}
        handleChange={handleChange}
        {...fields.name}
        margin="dense"
      />
      <InputField
        sx={{ width: '350px', marginTop: '15px' }}
        value={email}
        handleChange={handleChange}
        {...fields.email}
        margin="dense"
      />
      <InputField
        sx={{ width: '350px', marginTop: '15px' }}
        value={password}
        handleChange={handleChange}
        {...fields.password}
        margin="dense"
      />
      <Button
        sx={{ width: '350px', marginTop: '15px' }}
        variant="contained"
        type="submit"
      >
        Sign up
      </Button>
    </form>
  );
};
export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
