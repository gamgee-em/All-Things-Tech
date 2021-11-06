import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink 
} from './NavigationElements';

const Navigation = () => {
    return ( 
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='signin'>
                        SignIn
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
     );
}
 
export default Navigation;