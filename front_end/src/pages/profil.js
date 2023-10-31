import React, { useEffect, useContext, useState } from 'react'

import Auth from '../contexts/Auth';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { URL } from '../utils/constant/backURL';
import { getItem } from '../services/localeStorage';
import { Formik, Form } from 'formik';
import { schemaFormUser } from '../utils/Formik-yup/yup/yupUser';
import { MyTextInput } from './../components/inputs/input';


const Profil = () => {
  const navigate = useNavigate();
  const { isAuthenticated, hasRoles, hasId } = useContext(Auth);
  const [user, setUser] = useState({});

  const profil = async () => {
    await axios.get(URL.user + `/${getItem('Id')}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getItem('Token') //the token is a variable which holds the token
      }
    }).then((res) => {
      console.log(res.data);
      setUser({
        email: res.data.email,
        lastname: res.data.lastname,
        firstname: res.data.firstname
      })
    }).catch(function (error) {
      // handle error
      console.log('erreur', error.response.status);
      if (error.response.status === 401) {
        navigate('/logout')
      }
    })
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home')
    } else {
      console.log(getItem('Token'));
      console.log(getItem('Id'));

      profil();
    }
  }, [])

  return (
    <div className='flex justify-center'>
      {console.log('profil', isAuthenticated, hasRoles, hasId)}
      {user && (console.log(user))}
      {user && (

        <Formik
          initialValues={user}
          validationSchema={schemaFormUser}
          onSubmit={(values) => {
            

            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          {() => (
            <Form className='flex flex-col p-2'>
              <div>
                Profil
                <p>
                  {user.email}
                </p>
                <MyTextInput
                  label="lastname"
                  name="Nom"
                  type="text"
                  placeholder="votre nom"
                  onChange={e => setUser({...user, lastname: e.target.value})}
                  value={user.lastname}
                />
                <p>
                  {user.lastname}
                </p>
                <p>
                  {user.firstname}
                </p>
              </div>

              <button className='my-2 md:my-1 bg-accent-2 self-center font-bold p-2 border-2' type="submit">Modifier</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default Profil