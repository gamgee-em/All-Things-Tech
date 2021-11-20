import {
    Logo,
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink 
} from './NavigationEl';
import Auth from '../../utils/auth';

const Navigation = () => {

    //! add to helper file later
    const logout = (e) => {
        e.preventDefault();
        Auth.logout();
    }

    return ( 

            <Nav>
                
                <Logo>
                    <h1>All Things Tech</h1>
                </Logo>

                {/* Position burger menu to right of logo in mobile */}
                <Bars />

                <NavMenu>

                    {/* check if user is logged in || ! to display appropriate navbar links */}

                    { Auth.loggedIn() ? (
                    <>
                       <NavLink to='/' activeStyle>
                            Home
                        </NavLink>
                        <NavLink to='/dashboard' activeStyle>
                            Dashboard
                        </NavLink>
                        
                        <NavBtn>
                            <NavBtnLink to='#' onClick={logout}>
                                Logout
                            </NavBtnLink>
                        </NavBtn>
                    </>

                    ) : (

                    <>
                        <NavLink to='/' activeStyle>
                            Home
                        </NavLink>
                        <NavLink to='/register' activeStyle>
                            Register
                        </NavLink>
                        <NavBtn>
                            <NavBtnLink to='/login'>
                                Log In
                            </NavBtnLink>
                        </NavBtn>
                    </>
                    )}
                </NavMenu>
            </Nav>
     );
}
 
export default Navigation;