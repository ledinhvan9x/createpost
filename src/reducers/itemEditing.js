/* eslint-disable linebreak-style */
import * as types from 'constants/ActionTypes';

const initialState = {};
// eslint-disable-next-line default-param-last
const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_POST:
      return action.post;
    default:
      return state;
  }
};

export default itemEditing;
