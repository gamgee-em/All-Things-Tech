import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Main, RegisterForm, RegisterInput, RegisterBtnDiv, RegisterBtn } from './PagesElements';
import Auth from '../utils/auth';

const Register = () => {

    const [ registerState, setRegisterState ] = useState(
        {
            username: '',
            email: '',
            password: '',
        }
    );

    const [ addUser, {error, data } ] = useMutation( ADD_USER );

    const handleChange = (e) => {

        const { name, value } = e.target;

        setRegisterState(
            {
                ...registerState,
                [name]: value,
            }
            
        );
        console.log(registerState);
    };

    const handleRegisterForm = async (e) => {

        e.preventDefault();
        console.log( 'RegisterState: ', registerState );

        try {
            const { data } = await addUser({
                variables: { 
                    ...registerState 
                },
            });
            Auth.login(data.addUser.token);
        } catch (err) {
            throw err;
        };
    };

    const handleClearForm = (e) => {
        
        e.preventDefault();

        setRegisterState({
            username: '',
            email: '',
            password: '',
        });
    };

    return ( 
        <Main>
            
            { data ? (
                <p>
                Success! You may now head{" "}
                <Link to="/dashboard">back to the dashboard.</Link>
                </p>
                ) : (
                <RegisterForm onSubmit={ handleRegisterForm }>
                <h1> Register </h1>
                    <RegisterInput 
                        name='username'
                        type='text' 
                        placeholder='Username' 
                        value={ registerState.username }
                        onChange={ handleChange }
                    />
                    <RegisterInput 
                        name='email'
                        type='text' 
                        placeholder='Email'
                        value={ registerState.email }
                        onChange={ handleChange }
                    />
                    <RegisterInput 
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={ registerState.password }
                        onChange={ handleChange }
                    />

                    <RegisterBtnDiv>
                        <RegisterBtn type='submit'> Submit </RegisterBtn>
                        <RegisterBtn onClick={handleClearForm}> Clear Form </RegisterBtn>
                    </RegisterBtnDiv>
          
                </RegisterForm>
            )}
        </Main>
     );
}
 
export default Register;