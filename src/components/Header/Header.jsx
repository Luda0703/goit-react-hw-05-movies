// import { NavLink } from "react-router-dom"
import { HeaderNaw, Nav, Ul, Li, StyledLink } from "./Header.styled";

const Header = () => {
    return (
        <>
        <HeaderNaw>
        <Nav>
        <Ul>
            <Li>
            <StyledLink to='/'>Home</StyledLink>
            </Li>
            <Li>
            <StyledLink to='/movies'>Movies</StyledLink>
            </Li>
        </Ul>
        </Nav>
        </HeaderNaw>
        </>
        
    )
}

export default Header;