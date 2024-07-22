import { Nav, P, Div, StyledLink, Button } from "./styles";

export default function Navbar() {
  return (
    <>
      <Nav>
        <P>oi</P>
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
