import PropTypes from 'prop-types';

import InputField from 'components/TextField/InputField';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';

import { Button } from '@mui/material';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        sx={{ width: '350px' }}
        value={email}
        handleChange={handleChange}
        {...fields.email}
      />
      <InputField
        sx={{ width: '350px', marginTop: '15px' }}
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button
        sx={{ width: '350px', marginTop: '15px' }}
        variant="contained"
        type="submit"
        margin="normal"
      >
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
