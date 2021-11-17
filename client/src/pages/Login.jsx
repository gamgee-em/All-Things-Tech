import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import { 
    Main, 
    LoginForm,
    LoginInput, 
    LoginBtnDiv, 
    LoginBtn 
} from './PagesElements';
import Auth from '../utils/auth';

const Login = () => {

    const [ loginState, setLoginState ] = useState(
        {
            username: '',
            password: '',
        }
    );

    const [ login, { error, data } ] = useMutation( LOGIN_USER );

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginState(
            {
                ...loginState,
                [ name ]: value,
            }
        );
    };

    const handleLoginForm = async (e) => {
        e.preventDefault();
        console.log( 'LoginState: ', loginState );
        try {
            const { data } = await login({
                variables: {
                    ...loginState
                },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        };
    };

    const handleClearForm = (e) => {
        e.preventDefault();

        setLoginState(
            { 
                username: '', 
                password: ''
            }
        )
    }


    return (

        <Main>
            { data ? (
                <p> Success! You may now head{' '}
                    <Link to="/dashboard">back to the dashboard.</Link>
                </p>
            ) : (
                <LoginForm onSubmit={ handleLoginForm }>
                    
                    <h1> Log In </h1>
                    <LoginInput 
                        name='username'
                        type="text" 
                        placeholder="Username" 
                        value={ loginState.username }
                        onChange={ handleChange }
                    />

                    <LoginInput 
                        name="password"
                        type="password" 
                        placeholder="Password"
                        value={ loginState.password }
                        onChange={ handleChange }
                    />

                    <LoginBtnDiv>

                        <LoginBtn type='submit'> Submit </LoginBtn>
                        <LoginBtn onClick={ handleClearForm }> Clear Form </LoginBtn>

                    </LoginBtnDiv>
                </LoginForm>
            )}
        </Main>

     );
}
 
export default Login;