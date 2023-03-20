import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { TextField } from '@mui/material';

const InputField = ({ handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <TextField
        htmlFor={id}
        variant="outlined"
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default InputField;
