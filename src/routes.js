/* eslint-disable linebreak-style */
import ViewPage from 'pages/ViewPage/ViewPage';
import AddPage from 'pages/AddPage/AddPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import ViewDetailPage from 'pages/ViewDetailPage/ViewDetailPage';
import EditPage from 'pages/EditPage/EditPage';

const routes = [
  {
    path: '/viewposts',
    element: <ViewPage />,
    children: [
      {
        path: ':id',
        element: <ViewDetailPage />,
        children: [
          {
            path: 'edit',
            element: <EditPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/addpost',
    element: <AddPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
];

export default routes;
