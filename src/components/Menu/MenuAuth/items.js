import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/signin',
    text: 'Sign in',
  },
  {
    id: nanoid(),
    to: '/signup',
    text: 'Sign up',
  },
];

export default items;
