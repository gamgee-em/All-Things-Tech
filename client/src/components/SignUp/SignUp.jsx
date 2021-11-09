import { Main, SignUpForm, SignUpInput, SignUpBtn, Button } from './SignUpEl';

const SignUp = () => {
    return ( 
        <Main>
            <h1> Sign Up </h1>
                <SignUpForm>

                    <SignUpInput type="text" placeholder="Username" />
                    <SignUpInput type="text" placeholder="Email" />
                    <SignUpInput type="password" placeholder="Password" />

                    <SignUpBtn>
                        <Button> Submit </Button>
                        <Button> Clear Form </Button>
                    </SignUpBtn>
                    
                </SignUpForm>
        </Main>
     );
}
 
export default SignUp;