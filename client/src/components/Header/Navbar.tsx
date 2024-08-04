import * as S from "./styles";
import img from "../../assets/img/opus_logo.jpeg";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
export default function Navbar() {
  const [show, setShow] = useState(false);

  const handShow = () => {
    setShow(!show); // aqui ele muda o valor boolean da variavel ao clicar
  };
  return (
    <>
      <S.Nav>
        <S.LogoOpus src={img} />
        {/* <img src={img} height={50} width={50} alt="" /> */}

        <S.iconResponsi onClick={handShow}>
          <FiAlignJustify />
        </S.iconResponsi>

        <S.Div>
          <S.StyledLink to="">Destaques</S.StyledLink>
          <S.StyledLink to="">Vagas</S.StyledLink>
          <S.StyledLink to="">Sobre</S.StyledLink>
          <S.Button>entrar</S.Button>
        </S.Div>
      </S.Nav>
      {show /**aqui é uma condição ternaria se ficar true ele mostra se for falsa ele remove */ ? (
        <S.DivM>
          <S.StyledLinkMobile to="">Destaques</S.StyledLinkMobile>
          <S.StyledLinkMobile to="">Vagas</S.StyledLinkMobile>
          <S.StyledLinkMobile to="">Sobre</S.StyledLinkMobile>
          <S.StyledLinkMobile to="">entrar</S.StyledLinkMobile>
        </S.DivM>
      ) : null}
    </>
  );
}
