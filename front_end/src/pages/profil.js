import React, { useEffect, useContext } from 'react'

import Auth from '../contexts/Auth';
import { useNavigate } from 'react-router-dom';

import axios from 'axios' ;
import { URL } from '../utils/constant/backURL';
import { getItem } from '../services/localeStorage';

const Profil = () => {
  const navigate = useNavigate();
  const { isAuthenticated, hasRoles, hasId } = useContext(Auth) ;

  

  useEffect(() =>{
    if (!isAuthenticated) {
      navigate('/home')
    }else{
      console.log(getItem('Token'));
      // const profil = async (objet) => {
      //   await axios.get(URL.user + `/${hasId}`, getItem('Token')).then((res) => {
      //     console.log(res);
      //   })
      // }
      // profil();
    }
  }, [])

  return (
    <div>Profil
      {console.log('profil', isAuthenticated, hasRoles, hasId)}

    </div>
  )
}

export default Profil