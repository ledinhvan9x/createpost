/* eslint-disable linebreak-style */
import * as types from 'constants/ActionTypes';
import callApi from 'utils/apiCaller';

export const actFetchPosts = (posts) => ({
  type: types.FETCH_POSTS,
  posts,
});

export const actFetchPostsRequest = () => (dispatch) => callApi('posts', 'GET', null).then((res) => {
  dispatch(actFetchPosts(res.data));
});

export const actDeletePost = (id) => ({
  type: types.DELETE_POST,
  id,
});

export const actDeletePostRequest = (id) => (dispatch) => callApi(`posts/${id}`, 'DELETE', null).then((res) => {
  dispatch(actDeletePost(res.data.id));
});

export const actAddPost = (post) => ({
  type: types.ADD_POST,
  post,
});

export const actAddPostRequest = ({ post, navigate }) => (dispatch) => callApi('posts', 'POST', post).then((res) => {
  dispatch(actAddPost(res.data));

  if (res.status === 201) {
    navigate(`/viewposts/${res.data.id}`);
  }
});

export const actGetPost = (post) => ({
  type: types.EDIT_POST,
  post,
});

export const actGetPostRequest = (id) => (dispatch) => callApi(`posts/${id}`, 'GET', null).then((res) => {
  dispatch(actGetPost(res.data));
});

export const actUpdatePost = (post) => ({
  type: types.UPDATE_POST,
  post,
});

export const actUpdatePostRequest = ({ postItem, navigate }) => (dispatch) => callApi(`posts/${postItem.id}`, 'PUT', postItem).then((res) => {
  dispatch(actUpdatePost(res.data));
  if (res.status === 200) {
    navigate(`/viewposts/${res.data.id}`);
  }
});
