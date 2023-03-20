import useForm from 'shared/hooks/useForm';

import InputField from 'components/TextField/InputField';

import fields from './fields';
import initialState from './initialState';
import Button from 'components/Button/Button';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        value={email}
        handleChange={handleChange}
        {...fields.email}
        margin="dense"
      />
      <InputField
        value={password}
        handleChange={handleChange}
        {...fields.password}
        margin="dense"
      />
      <Button text={'Sign in'} />
    </form>
  );
};
export default LoginForm;
