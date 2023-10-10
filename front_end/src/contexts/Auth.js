import React from 'react';

import { HasRoles, HasAuthenticated } from '../services/AuthApi' ;

export default React.createContext({
  isAuthenticated: HasAuthenticated(),
  hasRoles: HasRoles(),
});