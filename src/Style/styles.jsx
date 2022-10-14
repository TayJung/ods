import Styled from "styled-components";

export const Container = Styled.section`
 background:${(props) => props.theme.colors.background};
  color:${(props) => props.theme.colors.text};
  width:100%;
  height:15vh;
  display:flex;
  justify-content:space-around;
  align-items:center;
`;

export const Logo = Styled.img`
width:5vw;
`;

export const H1 = Styled.h1`
font-size:1.9em;
text-shadow: 1px 2px 2px #000;
`;

export const BoxTheme = Styled.div`
width:10vw;
height:4vh;
display:flex;
justify-content:center;
align-items:center;

`;

export const Button = Styled.button`
border: none;
width:4vw;

background:none;
color:${(props) => props.theme.colors.text};
svg{
  font-size:1.5em;
}
`;
