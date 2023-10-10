import React from 'react'

import axios from 'axios';


import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';


import { MyCheckbox } from './../components/inputs/chekbox';
import { MyTextInput } from './../components/inputs/input';



import { datetime } from './../utils/constant/dateTimeNow';
import { schemaFormRegistration } from './../utils/Formik-yup/yup/yupRegistration';
import { defaultValuesUser } from './../utils/Formik-yup/default-value-form/defaultValuesUser';
import { URL } from './../utils/constant/backURL';

const Register = () => {

    const myClassName = 'flex my-2 flex-col md:h-24';
    
    // * function permettant l'envoye des datas à l'api pour l'inscription simple
    
    const navigate = useNavigate();
    const submit = async (objet) => {

        await axios.post(URL.postUser, {
            roles: ['ROLE_USER'],
            email: objet.email,
            password: objet.password,
            createdAt: datetime,
            isActive: true
        }).then((res) => {
            if (res.status === 201) {
                //alert("votre compte a été crée");
                localStorage.setItem('account', 'Votre compte a été crée, connectez-vous') ;

                // * sert pour rafraichir la page une fois l'inscription faite pour la page login
                navigate(0);
            }
        })
    };

    return (
        <Formik
            initialValues={defaultValuesUser}
            validationSchema={schemaFormRegistration}
            onSubmit={(values) => {
                submit(values);
            }}
        >
            {() => (
                /* debut du formulaire */
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

                    {/* le champ confirmer password */}
                    <div className={myClassName}>
                        <MyTextInput
                            label="Confimer mot de passe"
                            name="passwordConfirmation"
                            type="password"
                            placeholder="Confimez votre mot de passe"
                        />
                    </div>

                    {/* le champ checkbox */}
                    <div className='flex flex-col mx-auto my-2 md:my-1'>
                        <MyCheckbox name="box_validation">
                            Acceptez les condition d'utilisation <Link className='text-accent-2' to='#'>CGU</Link>
                        </MyCheckbox>
                    </div>

                    <button className='my-2 md:my-1 bg-accent-2 self-center font-bold text-primary p-2 border-2 w-4/6 md:w-3/6' type="submit">Devenir Membre</button>
                </Form>
            )}
        </Formik >

    )
}

export default Register