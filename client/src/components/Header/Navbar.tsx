import * as S from "./styles";
import img from "../../assets/img/opus_logo.jpeg";

export default function Navbar() {
  return (
    <>
      <S.Nav>
        <S.LogoOpus src={img}/>
        {/* <img src={img} height={50} width={50} alt="" /> */}
        <S.Div>
          <S.StyledLink to="">Destaques</S.StyledLink>
          <S.StyledLink to="">Vagas</S.StyledLink>
          <S.StyledLink to="">Sobre</S.StyledLink>
          <S.Button>entrar</S.Button>
        </S.Div>
      </S.Nav>
    </>
  );
}
