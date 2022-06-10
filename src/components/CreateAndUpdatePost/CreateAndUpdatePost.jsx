/* eslint-disable indent */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, memo } from 'react';
import { Formik, Form } from 'formik';
import TextField from 'components/TextField/TextField';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/index';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

function CreateAndUpdatePost({ isupdatepost }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const itemEditing = useSelector((state) => state.itemEditing);
  const posts = useSelector((state) => state.posts);

  const notify = () => toast.success(id ? 'Save Post Successfully!' : 'Add Post Successfully!');

  useEffect(() => {
    dispatch(actions.actGetPostRequest(id));
  }, []);

  const validate = Yup.object({
    title: Yup.string()
      .min(5, 'Must be 5 characters or more')
      .required('Title is required'),
    body: Yup.string()
      .min(10, 'Body must be at least 10 charaters')
      .required('Body is required'),
  });

  return (
    <Formik
      enableReinitialize
      initialValues={id ? { body: itemEditing.body, title: itemEditing.title } : {
        title: '',
        body: '',
      }}
      validationSchema={validate}
      onSubmit={(post) => {
        if (post.body && post.body) {
          notify();
        }

        if (!id) {
          dispatch(actions.actAddPostRequest({ post, navigate }));
        } else {
          const postItem = { ...post, id: itemEditing.id };
          dispatch(actions.actUpdatePostRequest({ postItem, navigate }));
        }
      }}
    >
      {(formik) => (
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-1">
              { isupdatepost ? (<h1 className="my-4 font-weight-bold .display-4">Create New Post</h1>) : (<h1 className="my-4 font-weight-bold .display-4">Update Post</h1>) }
              <Form>
                <TextField label="Title" name="title" type="text" istextarea autoFocus />
                <TextField label="Body" name="body" type="text" istextarea />
                <div>
                  {' '}
                  <button
                    className="btn btn-success shadow-none my-3 mx-2"
                    type="submit"
                    onClick={() => {
                        formik.setValues((prevState) => ({
                          ...prevState,
                          title: formik.values.title,
                          body: formik.values.body,
                        }));

                        // formik.submitForm();
                          // if (Object.keys(formik.errors) === 1) {
                          //   notify();
                          // }
                    }}
                  >
                    { isupdatepost ? 'Add' : 'Save' }
                  </button>
                  <button
                    className="btn btn-danger shadow-none"
                    type="reset"
                    onClick={() => {
                      formik.resetForm({
                        values: {
                          title: '',
                          body: '',
                        },
                      });
                    }}
                  >
                    Reset
                  </button>

                </div>
                {id && (
                <NavLink to={`/viewposts/${id}`} className="btn btn-secondary shadow-none">
                  Back To Detail Post
                  {' '}
                  {id}
                </NavLink>
                )}
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

CreateAndUpdatePost.propTypes = {
  // item: PropTypes.oneOfType([PropTypes.object]),
  isupdatepost: PropTypes.bool,
};

CreateAndUpdatePost.defaultProps = {
  isupdatepost: true,
};

export default memo(CreateAndUpdatePost);
