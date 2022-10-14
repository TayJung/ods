import Styled from "styled-components";

export const Container = Styled.section`
 width:100%;
  height:70vh;
  justify-content:space-evenly;
  align-items:center;
  display:flex;
`;

export const Box = Styled.div`
  justify-content:space-evenly;
  align-items:center;
  display:flex;
  flex-direction:column;
  width:40%;
  height:60vh;
`;

export const Image = Styled.img`
width:40%;
border-radius:1em;
box-shadow: 2px 2px 7px 3px #000;
`;

export const Title = Styled.h2`
text-align:center;
font-size:1.8em;
`;
export const P = Styled.p`
font-size:1.05em;
`;

export const Link = Styled.a`
color:#A52A2A;
font-weight:bold;
`;
