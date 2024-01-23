import axios from 'axios';
const BASEURL = 'https://65ac22fdfcd1c9dcffc7a386.mockapi.io/contacts';
export const contactAPI = axios.create({
  BASEURL: 'https://65ac22fdfcd1c9dcffc7a386.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await contactAPI.get(`${BASEURL}/contacts`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post(`${BASEURL}/contacts`, contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await contactAPI.delete(`${BASEURL}/contacts/${id}`);
  return data;
};