
/* fonction retournant l'état du l'utilisateur */
export function HasAuthenticated(token = null) {

  console.log('je passe dans l\'autentification');
  if(token)
  {
    return true;
  }
  else
  {
    return false;
  }

}

export function HasRoles() {
  return 'role_user' ;
}