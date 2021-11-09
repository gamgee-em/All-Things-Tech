import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #000;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    letter-spacing: 0.05rem;
    z-index: 10;
`;

export const Logo = styled.div`
    display: flex;
    align-self: center;
    position: absolute;
    left: 4rem;
    color: rgb(224,61,125);
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;

    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        color: rgb(224,61,125);
    }

    &:focus {
        color: rgb(224,61,125);
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: rgb(224,61,125);

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none; 
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    padding-left: 1rem;
    
    @media screen and (max-width: 768px) {
        display: none
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: rgb(224,61,125);
    padding: .6rem .8rem;
    margin: 0 4rem 0 0;
    text-align: center;
    color: #fff;
    width: 5.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: rgb(224,61,125);
    }
`;
