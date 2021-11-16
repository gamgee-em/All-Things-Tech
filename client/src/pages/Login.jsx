import { Main, LoginForm, LoginInput, LoginBtnDiv, LoginBtn } from './PagesElements';

const Login = () => {
    return (

        <Main>

                <LoginForm>
                    
                    <h1> Log In </h1>
                    <LoginInput type="text" placeholder="Username" />

                    <LoginInput type="password" placeholder="Password" />

                    <LoginBtnDiv>

                        <LoginBtn> Submit </LoginBtn>
                        <LoginBtn> Clear Form </LoginBtn>

                    </LoginBtnDiv>
                </LoginForm>

        </Main>

     );
}
 
export default Login;