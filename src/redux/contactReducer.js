import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './contactAction';

export const contactReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload.id),
});

export const filterReducer = createReducer('', {
  [filterContact]: (state, action) => action.payload.filter,
});
