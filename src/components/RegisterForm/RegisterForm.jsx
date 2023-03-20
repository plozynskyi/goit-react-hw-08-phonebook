import useForm from 'shared/hooks/useForm';

import InputField from 'components/TextField/InputField';

import fields from './fields';
import initialState from './initialState';
import Button from 'components/Button/Button';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        value={name}
        handleChange={handleChange}
        {...fields.name}
        margin="dense"
      />
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
      <Button text={'Sign up'} />
    </form>
  );
};
export default RegisterForm;
