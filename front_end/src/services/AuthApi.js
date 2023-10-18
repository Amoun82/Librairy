import { getItem, removeItem } from '../services/localeStorage';

export function hasAuthenticated() {
    const token = getItem('Token');
    const result = token ? true : false;

    if (false === result) {
        removeItem('Token');
    }

    return result;
}

export function logout() {
    removeItem('Token');
}

export function HasRoles() {
  return 'role_user' ;
}