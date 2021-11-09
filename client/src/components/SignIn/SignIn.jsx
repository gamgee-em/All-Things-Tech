import { Main, SignInForm, SignInInput, SignInBtn, Button } from './SignInEl';

const SignIn = () => {
    return (

        <Main>
            <h1> Sign In </h1>

                <SignInForm>
                    <SignInInput type="text" placeholder="Username" />

                    <SignInInput type="password" placeholder="Password" />

                    <SignInBtn>

                        <Button> Submit </Button>
                        <Button> Clear Form </Button>

                    </SignInBtn>
                </SignInForm>

        </Main>

     );
}
 
export default SignIn;