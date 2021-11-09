import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 85vh;
    letter-spacing: 0.05rem;

    background-color: rgba(63, 63, 63, 0.8);
`;

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    letter-spacing: 0.05rem;
    height: 25vh;
    width: 30vw;
`;

export const SignUpInput = styled.input`
    height: 1.5rem;
    width: 25vw;
    text-indent: .25rem;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 2px solid black;
    letter-spacing: 0.025rem;


    background: white;
    background-color: rgba(0,0,0, .0);

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(224,61,125);
    }

    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: rgba(0, 0, 0);
        letter-spacing: 0.025rem;

      }
    }

    &::-moz-placeholder { /* Firefox 19+ */
        color: rgba(0, 0, 0);
        letter-spacing: 0.025rem;

    }
`;

export const SignUpBtn = styled.div`
    display: flex;
    gap: .5rem;
    margin: 1rem 0 0 0;
`;

export const Button = styled.button`

    border-radius: 4px;
    background: rgb(224,61,125);
    padding: .6rem .8rem;
    text-align: center;
    color: #fff;
    width: 5.5rem;
    border: none;
    outline: none;
    letter-spacing: 0.05rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: rgb(224,61,125);
    }
`;