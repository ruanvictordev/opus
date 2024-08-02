import Styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const Nav = Styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  border: 1px solid black;
  
  
  background:${theme.colors.colorOne};
 
  padding: 20px 40px 20px 40px;
`;

export const StyledLink = Styled(Link)`
  padding:10px;
  text-decoration:none;
  font-weight:bold;
  color:${theme.colors.colorFour};// importando o theme usa as colores que la tem
  margin-left:60px;
`;

export const Button = Styled.button`
  color:black;
  background:${theme.colors.colorFour};
  border-radius:50%;
  padding:10px;
  margin:0px 60px 0px 60px;
  border:none;
  font-weight:bold;

`;

export const P = Styled.p`
font-size:10px;
`;
export const Div = Styled.div`
  border: 1px solid black;
  
  //Para telas menores de 768px
  @media (max-width: 768px) {
  display: none;
  }
`;

export const LogoOpus = Styled.img`
  height: 50px;
  weight: 50px;
`
export const iconResponsi = Styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`