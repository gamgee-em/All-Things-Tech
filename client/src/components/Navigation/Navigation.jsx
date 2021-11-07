import {
    Logo,
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink 
} from './NavigationEl';

const Navigation = () => {
    return ( 
        <>
            <Nav>
                <Logo>
                    <h1>All Things Tech</h1>
                </Logo>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
     );
}
 
export default Navigation;