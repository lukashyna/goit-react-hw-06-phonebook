import Type from './actionType';

export const addContact = contact => ({
  type: Type.ADD_CONTACT,
  payload: {
    id: Date.now(),
    contact,
  },
});
export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: {
    id,
  },
});
export const filterContact = filter => ({
  type: Type.FILTER_CONTACT,
  payload: { filter },
});
