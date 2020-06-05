import Type from './actionType';

export const contactReducer = (state = [], action) => {
  switch (action.type) {
    case Type.ADD_CONTACT:
      return [...state, action.payload];
    case Type.DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload.id);
    default:
      return state;
  }
};
export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case Type.FILTER_CONTACT:
      return action.payload.filter;
    // return state.filter(contact => contact.name.toLowerCase().includes(action.payload.filter.toLowerCase()));
    default:
      return state;
  }
};
