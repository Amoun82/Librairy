import React from 'react';

import { HasRoles, hasAuthenticated } from '../services/AuthApi' ;

export default React.createContext({
  isAuthenticated: hasAuthenticated(),
  setIsAuthenticated: value => {},
  hasRoles: HasRoles(),
  setRoles: value => {},
});