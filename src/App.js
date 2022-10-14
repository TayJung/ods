import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/themes";
import { GlobalStyle } from "./Style/GlobalStyle";
import Header from "./pages/header";
import Logo from "./assets/logo.svg";
import { CgDarkMode } from "react-icons/cg";

import * as S from "./Style/styles";

export default function App() {
  const [theme, setTheme] = useState("ligth");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <S.Container>
        <GlobalStyle />
        <S.Logo src={Logo} alt="" />
        <S.H1>Objetivos de Desenvolvimento Sustentável (ODS) </S.H1>
        <S.BoxTheme>
          <p>Theme</p>
          <S.Button onClick={() => themeToggler()}>
            <CgDarkMode />{" "}
          </S.Button>
        </S.BoxTheme>
      </S.Container>
      <Header />
    </ThemeProvider>
  );
}
