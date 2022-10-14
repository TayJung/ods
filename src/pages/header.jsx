import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import OdsCidade from "./OdsCidade";
import Suggestion from "./suggestion";
import * as S from '../Style/styleHeader'

export default function Header() {
  return (
    <BrowserRouter>
      <S.Nav>
        <S.Ul>
          <li>
            <S.Links to="/">Home</S.Links>
          </li>
          <li>
            <S.Links to="/suggestion">Sugestões de ODSs</S.Links>
          </li>
          <li>
            <S.Links to="/odsCidade">ODS na minha Cidade</S.Links>
          </li>
        </S.Ul>
      </S.Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/odsCidade" element={<OdsCidade />} />
        <Route path="/suggestion" element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
}
