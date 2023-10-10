import React from 'react';

import { HasRoles, HasAuthenticated } from '../services/AuthApi' ;
import { useCookies } from 'react-cookie';

export default React.createContext({
  isAuthenticated: HasAuthenticated(),
  hasRoles: HasRoles(),
});