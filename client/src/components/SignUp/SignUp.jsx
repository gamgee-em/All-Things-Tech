import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { Main, SignUpForm, SignUpInput, SignUpBtn, Button } from './SignUpEl';

const SignUp = () => {

    const [ signUpState, setSignUpState ] = useState(
        {
            username: '',
            email: '',
            password: '',
        }
    );

    const [ addUser, {error, data } ] = useMutation( ADD_USER );

    const handleChange = (e) => {

        const { name, value } = e.target;

        setSignUpState(
            {
                ...signUpState,
                [name]: value,
            }
            
        );
        console.log(signUpState);
    };

    const handleSignUpForm = async (e) => {

        e.preventDefault();
        console.log( 'SignUpState: ', signUpState );

        try {
            const { data } = await addUser({
                variables: { 
                    ...signUpState 
                },
            });
            window.location.href = '/dashboard';
        } catch (err) {
            console.log(err);
            throw err;
        };
    };

    const handleClearForm = (e) => {
        
        e.preventDefault();

        setSignUpState({
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
                <SignUpForm onSubmit={ handleSignUpForm }>
                <h1> Sign Up </h1>
                    <SignUpInput 
                        name='username'
                        type='text' 
                        placeholder='Username' 
                        value={ signUpState.username }
                        onChange={ handleChange }
                    />
                    <SignUpInput 
                        name='email'
                        type='text' 
                        placeholder='Email'
                        value={ signUpState.email }
                        onChange={ handleChange }
                    />
                    <SignUpInput 
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={ signUpState.password }
                        onChange={ handleChange }
                    />

                    <SignUpBtn>
                        <Button type='submit'> Submit </Button>
                        <Button onClick={handleClearForm}> Clear Form </Button>
                    </SignUpBtn>
          
                </SignUpForm>
            )}
        </Main>
     );
}
 
export default SignUp;