import React from "react";
import Ods from "../assets/odsCidade/odsDois.svg";
import * as S from "../Style/styleOdsCity";

export default function OdsCidade() {
  return (
    <S.Container>
      <>
        <h2>ODS em processo na minha cidade</h2>
      </>
      <S.Box>
        <>
          <S.Img src={Ods} alt="" />
        </>
        <S.BoxText>
          <h3>Férias sem Fome</h3>
          <p>
            Em nosso município, já nos deparamos incontáveis vezes com as
            famílias atingidas pelo desemprego, e a carência de condições
            minímas de sustento aos seus filhos, para quem a merenda escolar é o
            único alento que pode monimizar essa situação.
          </p>
          <p>
            O projeto prevê a abertura dos refeitorios nas escolas públicas
            municipais para servir, pelo menos, umas refeição diária às crianças
            durante o periodo de férias escolares.
          </p>
          <S.A
            target="blank"
            href="https://www.girodegravatai.com.br/luis-felipe-vereadora-rosane-bordignon-propoe-ferias-sem-fome-e-o-ods-n-2-da-onu-em-gravatai/"
          >
            Veja mais
          </S.A>
        </S.BoxText>
      </S.Box>
    </S.Container>
  );
}
