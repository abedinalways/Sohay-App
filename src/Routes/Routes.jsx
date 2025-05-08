import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from './PrivateRoute';
import Profile from '../Pages/Profile/Profile';
import PayBills from '../Pages/PayBills/PayBills';
import Bills from '../Components/Bills/Bills';
import UpdateProfile from '../Components/UpdateProfile/UpdateProfile';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/bills',
        hydrateFallbackElement: (
          <span className="loading loading-ball loading-xs"></span>
        ),
        loader: () => fetch('../billsData.json'),
        element: (
          <PrivateRoute>
            <Bills />
          </PrivateRoute>
        ),
      },
      {
        path: '/payBills/:id',
        hydrateFallbackElement: (
          <span className="loading loading-ball loading-xs"></span>
        ),
        errorElement: <ErrorPage/>,
        loader: () => fetch('../billsData.json'),
        Component: PayBills,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
]);

export default router;