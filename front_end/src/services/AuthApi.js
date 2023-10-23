import { getItem, removeItem } from '../services/localeStorage';

export function hasAuthenticated() {
    const token = getItem('Token');
    const resultToken = token ? true : false;

    if (false === resultToken) {
        removeItem('Token');
    }

    return resultToken;
}

export function logout() {
    removeItem('Token');
}

export function HasRoles() {
    const roles = getItem('Roles');
    const resultRoles = roles ? true : false;

    if (false === resultRoles) {
        removeItem('Roles');
    }

    return roles;
}

export function hasId(){
    const Id = getItem('Id');
    const resultRoles = Id ? true : false;

    if (false === resultRoles) {
        removeItem('Id');
    }

    return Id;
}