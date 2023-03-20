import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = async data => {
  return await authInstance.post('/users/signup', data);
};

export const signin = async data => {
  return await authInstance.post('/users/login', data);
};
