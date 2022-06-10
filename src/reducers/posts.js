/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
import * as types from 'constants/ActionTypes';
import _ from 'lodash';

const initialState = [];

// eslint-disable-next-line default-param-last
const posts = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      // eslint-disable-next-line no-param-reassign
      state = action.posts;
      return [...state];
    case types.DELETE_POST:
      // eslint-disable-next-line no-case-declarations
      const index = _.findIndex(state, (o) => o.id === action.id);
      state.splice(index, 1);
      return [...state];
    case types.ADD_POST:
      state.push(action.post);
      return [...state];
    default:
      return [...state];
  }
};

export default posts;
