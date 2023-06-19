import { NavLink } from "react-router-dom"
import { HeaderNaw, Nav, Ul, Li } from "./Header.styled";

const Header = () => {
    return (
        <>
        <HeaderNaw>
        <Nav>
        <Ul>
            <Li>
            <NavLink to='/'>Home</NavLink>
            </Li>
            <Li>
            <NavLink to='/movies'>Movies</NavLink>
            </Li>
        </Ul>
        </Nav>
        </HeaderNaw>
        </>
        
    )
}

export default Header;