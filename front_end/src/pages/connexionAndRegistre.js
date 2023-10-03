import React, { useState } from 'react';

import '../App.css'
import SwitchText from '../components/switchText';
import FormikRegistre from '../utils/Formik-yup/ViewFormik/formikRegistre';
import FormikConnexion from '../utils/Formik-yup/ViewFormik/formikConnexion';
import { useQueryClient } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';

const ConnexionAndRegistre = () => {

    const [cookies] = useCookies()
    const queryClient = useQueryClient();

    const [changeForm, setChangeForm] = useState(true);

    //TODO : prevoir la functionnalité pour swith le formulaire en fonction du text selectionner 
    return (
        <div className='p-2 h-screen'>


            {console.log('cookies', cookies)}
            {console.log(queryClient)}
            {/* TODO partie pour l'utilisateur connecté */}
            {
                queryClient.getQueryData(['islogged']) && ('connecté')
            }

            {/* le composant switch text */}
            {
                !queryClient.getQueryData(['islogged']) && (
                    <div onClick={() => { setChangeForm(!changeForm) }}>
                        <SwitchText textRight={'Connexion'} textLeft={'Inscription'} changeForm={changeForm} />
                    </div>
                )
            }

            {/* changement de formulaire en fonction du composant switchText  */}
            {
                !queryClient.getQueryData(['islogged']) && (changeForm ? (<FormikConnexion />) : (<FormikRegistre />))
            }

        </div>
    );
}

export default ConnexionAndRegistre;