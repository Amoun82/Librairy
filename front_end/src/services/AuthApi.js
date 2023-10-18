import { getItem, removeItem } from '../services/localeStorage';

export function hasAuthenticated() {
    const token = getItem('miniblogToken');
    const result = token ? true : false;

    if (false === result) {
        removeItem('miniblogToken');
    }

    return result;
}

export function logout() {
    removeItem('miniblogToken');
}

export function HasRoles() {
  return 'role_user' ;
}