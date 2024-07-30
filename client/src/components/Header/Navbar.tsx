import { Nav, P, Div, StyledLink, Button } from "./styles";
import img from "../../assets/img/opus_logo.jpeg";

export default function Navbar() {
  return (
    <>
      <Nav>
        <img src={img} height={50} width={50} alt="" />
        <Div>
          <StyledLink to="">Destaques</StyledLink>
          <StyledLink to="">Vagas</StyledLink>
          <StyledLink to="">Sobre</StyledLink>
          <Button>entrar</Button>
        </Div>
      </Nav>
    </>
  );
}
