import { combineReducers } from 'redux';
import posts from './posts';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
  posts,
  itemEditing,
});

export default appReducers;
