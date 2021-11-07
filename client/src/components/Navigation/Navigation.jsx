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

            <Nav>

                <Logo>
                    <h1>All Things Tech</h1>
                </Logo>

                {/* Position burger menu to right of logo in mobile */}
                <Bars />

                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to='/signup' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to='/signin'>
                        Sign In
                    </NavBtnLink>
                </NavBtn>

            </Nav>
        
     );
}
 
export default Navigation;