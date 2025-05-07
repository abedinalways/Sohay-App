import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-dots loading-xs"></span>;
  }
  if (!user) {
    return <Navigate to='/login'/>
  }
  return children;
};

export default PrivateRoute;