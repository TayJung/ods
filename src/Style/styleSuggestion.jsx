import Styled from "styled-components";

export const Container = Styled.section`
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
`;

export const ContainerTitle = Styled.section`
  width:100%;
  height:20vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ContainerSuggestion = Styled.section`
 justify-content:center;
  align-items:center;
  display:flex;
  flex-wrap:wrap;
  gap:2em;
`;

export const Image = Styled.img`
  width:40vw;

`;

export const P = Styled.p`
  width:30vw;
`;

export const Div = Styled.div`
  width:42vw;
  height:50vh;
  justify-content:space-around;
  align-items:center;
  display:flex;
  flex-direction:column;
  border:solid #009EDB 2px;
  border-radius:1em;
  box-shadow: 2px 2px 7px 3px #000;
`;
