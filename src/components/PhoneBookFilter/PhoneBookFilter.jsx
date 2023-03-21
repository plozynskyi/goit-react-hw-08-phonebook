import PropTypes from 'prop-types';

import InputField from 'components/TextField/InputField';

import { FilterBox, FilterLabel } from './phone-book-filter.styled';

const PhoneBookFilter = ({ handleChange, value }) => {
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <InputField
        fullWidth
        size="small"
        sx={{}}
        value={value}
        name="filter"
        onChange={handleChange}
        margin="dense"
      />
    </FilterBox>
  );
};

export default PhoneBookFilter;

PhoneBookFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
