import React from "react";
import Image from "../assets/home/imgHome.jpg";
import * as S from "../Style/styleHome";

export default function () {
  return (
    <S.Container>
      <S.Box>
        <S.Title>Os Objetivos de Desenvolvimento Sustentável no Brasil</S.Title>

        <>
          <S.P>
            Os Objetivos de Desenvolvimento Sustentável são um apelo global à
            ação para acabar com a pobreza, proteger o meio ambiente e o clima e
            garantir que as pessoas, em todos os lugares, possam desfrutar de
            paz e de prosperidade. Estes são os objetivos para os quais as
            Nações Unidas estão contribuindo a fim de que possamos atingir a
            Agenda 2030 no Brasil.
          </S.P>
          <S.Link target="blank" href="https://brasil.un.org/pt-br/sdgs">
            Veja mais
          </S.Link>
        </>
      </S.Box>
      <>
        <S.Image src={Image} alt="" />
      </>
    </S.Container>
  );
}
