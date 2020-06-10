import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
