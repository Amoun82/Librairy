import React, { useEffect, useContext, useState } from 'react'

import Auth from '../contexts/Auth';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { URL } from '../utils/constant/backURL';
import { getItem } from '../services/localeStorage';

const Profil = () => {
  const navigate = useNavigate();
  const { isAuthenticated, hasRoles, hasId } = useContext(Auth);
  const [user, setUser] = useState({});



  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home')
    } else {
      console.log(getItem('Token'));
      console.log(getItem('Id'));
      const profil = async (objet) => {
        await axios.get(URL.user + `/${getItem('Id')}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getItem('Token') //the token is a variable which holds the token
          }
        }).then((res) => {
          console.log(res.data);
          setUser({
            email: res.data.email,
            
          })

        })
      }
      profil();
    }
  }, [])

  return (
    <div>Profil
      {console.log('profil', isAuthenticated, hasRoles, hasId)}
      { user && (console.log(user))}
    </div>
  )
}

export default Profil