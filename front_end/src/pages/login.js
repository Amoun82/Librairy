import React, { useState } from 'react'

import axios from 'axios';

import { Formik, Form } from 'formik';

import { schemaFormLogin } from '../utils/Formik-yup/yup/yupLogin';
import { MyTextInput } from '../components/inputs/input';
import { URL } from '../utils/constant/backURL';

import { defaultValuesLogin } from '../utils/Formik-yup/default-value-form/defaultValuesLogin';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { HasAuthenticated } from '../services/AuthApi';


const Login = () => {
  const [user, setUser] = useState()
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['account']);


  const myClassName = 'flex my-2 flex-col md:h-24';

  const submit = async (objet) => {

    await axios.post(URL.auth, {
      email: objet.email,
      password: objet.password,
    }).then((res) => {

      // ! une fois logé on récuperer les infos de l'utilisateur et on les stocks dans le query
      if (res.status === 200 && res.data.token) {

        setCookie('token', res.data.token, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'strict' });
        setCookie('islogged', true, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'strict' });
        setCookie('roles', res.data.user.roles[0], { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'strict' })

        console.log('je passe dans le login');
        HasAuthenticated(res.data.token);
        console.log(cookies);
        // * l'utilisateur seras rediriger sur la home page
        removeCookie('account') ;

        navigate('/home') ;
      }

    }).catch(function (error) {
      // handle error
      console.log('erreur', error.response.status);
      if (error.response.status === 401) {
        setCookie('account', 'inconnu, veuillez vous reconnectez ou inscrivez vous')
      }
    })
  };

  return (
    <div>

      {/* {cookies && console.log(cookies.account)} */}
      {cookies && (<div className={myClassName}>{cookies.account}</div>)}
      <Formik
        initialValues={defaultValuesLogin}
        validationSchema={schemaFormLogin}
        onSubmit={(values) => {
          submit(values);

          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {() => (
          <Form className='flex flex-col p-2'>
            {/* le champ Email */}
            <div className={myClassName}>
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="saisissez votre adresse mail"
              />
            </div>
            {/* le champ password */}
            <div className={myClassName}>
              <MyTextInput
                label="Mot de passe"
                name="password"
                type="password"
                placeholder="saisissez votre mot de passe"
              />
            </div>
            <button className='my-2 md:my-1 bg-accent-2 self-center font-bold p-2 border-2 w-4/6 md:w-3/6' type="submit">Connexion</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login