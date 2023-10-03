import React from 'react'

import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { schemaFormLogin } from '../yup/yupLogin';
import { MyTextInput } from '../../../components/inputs/input';
import { URL } from '../../constant/backURL';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { defaultValuesLogin } from '../default-value-form/defaultValuesLogin';
import { useCookies } from 'react-cookie';

const FormikConnexion = () => {

  const [cookies, setCookie] = useCookies()
  const queryClient = useQueryClient();
  const myClassName = 'flex my-3 flex-col md:h-24';
  const myClassNameMessage = 'flex my-3 flex-col text-center text-2xl font-bold';

  const navigate = useNavigate();

  const message = localStorage.getItem('account')

  const submit = async (objet) => {
    
    await axios.post(URL.auth, {
      email: objet.email,
      password: objet.password,
    }).then((res) => {

      // ! une fois logé on récuperer les infos de l'utilisateur et on les stocks dans le query
      if (res.status === 200 && res.data.token) {

        setCookie('token', res.data.token, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'strict' }) ;
        setCookie('islogged', true, { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'strict' }) ;
        setCookie('roles', res.data.user.roles[0], { maxAge: 900000, httpOnly: true, secure: true, sameSite: 'strict' })

        queryClient.setQueryData(['token'], res.data.token);
        queryClient.setQueryData(['islogged'], true);
        queryClient.setQueryData(['user'], res.data.user.identity);
        queryClient.setQueryData(['id'], res.data.user.id);

        localStorage.clear() ;

        // * l'utilisateur seras rediriger sur la home page
        navigate("/");
      }
      
    }).catch(function (error) {
      // handle error
      console.log('erreur',error.response.status);
      if(error.response.status === 401)
      {
        localStorage.setItem('account', 'inconnu, veuillez vous reconnectez ou inscrivez vous')
      }
      navigate(0) ;
    })
  };

  return (
    <>
      {/* le message de succes lors de l'inscription */}

      { message && (<div className={myClassNameMessage}>{message}</div>) }

      {console.log(queryClient)}
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
            <button className='my-2 md:my-1 bg-accent-2 self-center font-bold text-primary p-2 border-2 w-4/6 md:w-3/6' type="submit">Connexion</button>
          </Form>
        )}
      </Formik>

    </>
  )
}

export default FormikConnexion