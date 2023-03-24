import PropTypes from 'prop-types';

import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { TextField } from '@mui/material';

const InputField = ({ handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <TextField
      htmlFor={id}
      variant="outlined"
      onChange={handleChange}
      {...props}
    />
  );
};

export default InputField;

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
