import React, { useContext } from 'react' ;
import Auth from '../contexts/Auth';
import { Route, redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ path, element }) => {
  const { isAuthenticated } = useContext(Auth) ;

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    redirect('/home')
  )
}

export default AuthenticatedRoute ;