import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT', contact => ({
  payload: { contact, id: Date.now() },
  meta: { addContact: true },
}));
export const deleteContact = createAction('DELETE_CONTACT', id => ({
  payload: { id },
}));
export const filterContact = createAction('FILTER_CONTACT', filter => ({
  payload: { filter },
}));
