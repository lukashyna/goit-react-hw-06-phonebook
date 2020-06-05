import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { contactReducer, filterReducer } from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
