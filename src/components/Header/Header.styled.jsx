import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
color: #191970;
text-decoration: none;

&.active {
  color: #0000FF;
}
`;

export const HeaderNaw = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 1100;
display: flex;
justify-content: start;
align-items: start;
min-height: 40px;
background-color: #00FFFF;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  
`

export const Nav = styled.nav`

`
export const Ul = styled.ul`
font-family: 'Poppins';
font-weight: 700;
font-size: 30px;
display: flex;
list-style: none;
text-decoration: none;
gap: 50px;


`
export const Li = styled.li`
 
`
