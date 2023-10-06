import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from '../../Features/auth/authSlice';

const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;


