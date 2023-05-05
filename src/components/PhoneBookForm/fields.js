const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  phone: {
    type: 'text',
    name: 'phone',
    required: true,
    label: 'User phone number',
    inputProps: {
      pattern: '/^[+]?3?[s]?8?[s]?(?0d{2}?)?[s]?d{3}[s|-]?d{2}[s|-]?d{2}$/',
      mask: '+38 (000) 000-00-00',
    },
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
  email: {
    type: 'text',
    name: 'email',
    required: true,
    label: 'User email',
    // inputProps: {
    //   pattern: '/^[+]?3?[s]?8?[s]?(?0d{2}?)?[s]?d{3}[s|-]?d{2}[s|-]?d{2}$/',
    //   mask: '+38 (000) 000-00-00',
    // },
    title: 'email',
  },
};

export default fields;
