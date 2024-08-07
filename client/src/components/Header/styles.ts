import Styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const Main = Styled.div`
width:100%;
`;

export const Nav = Styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  
  
  background:${theme.colors.colorOne};
 
  padding: 20px 40px 20px 40px;

  @media(max-width:768px){
    height:100px;
  }
`;

export const StyledLink = Styled(Link)`
  padding:10px;
  text-decoration:none;
  font-weight:bold;
  color:${theme.colors.colorFour};// importando o theme usa as colores que la tem
  margin-left:60px;
`;

export const StyledLinkMobile = Styled(Link)`
  font-size:15px;
  color:black;
  text-decoration:none;
  font-weight:bold;

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
  /* border: 1px solid black; */
  
  //Para telas menores de 768px
  @media (max-width: 768px) {
  display: none;
  }
`;

export const DivR = Styled.div`

@media (max-width: 768px){
  display:inline-block;
  height:95px;
  float:right;
}
`;
export const DivM = Styled.div`
 @media (max-width:768px){
  display:flex;
  position:relative;
  z-index: 1;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:${theme.colors.colorFour};
  width:100px;
  gap:10px;
  border-radius:20px;
 }
`;

export const LogoOpus = Styled.img`
  height: 50px;
  width: 50px;
`;
export const iconResponsi = Styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor:pointer;
    font-size:30px;
  }
`;
