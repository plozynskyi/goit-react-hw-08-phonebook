export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name, phone }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      phone.toLowerCase().includes(normalizedFilter)
    );
  });
  return result;
};

export const loading = ({ contacts }) => contacts.isLoading;
export const error = ({ contacts }) => contacts.error;
