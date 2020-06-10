import { createSelector } from 'reselect';

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;
export const getContactsLength = state => state.contacts.length;
export const getAllNames = state => state.contacts.map(contact => contact.contact.name);
export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  if (contacts.length <= 1) return contacts;
  return contacts.filter(contact => contact.contact.name.toLowerCase().includes(filter.toLowerCase()));
});
