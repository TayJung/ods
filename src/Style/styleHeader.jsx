import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = Styled(Link)`
text-decoration:none;
color:${(props) => props.theme.colors.text};
font-size:1.2em;
&:hover{
border-bottom: solid #009EDB 3px;
padding-top:1em;
}
`;
export const Nav = Styled.nav`
 width:100%;
  height:15vh;

`;
export const Ul = Styled.ul`
 width:100%;
  height:15vh;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  list-style:none;
`;
