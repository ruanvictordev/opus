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

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }
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
  border-radius:7px;
  padding:10px;
  margin:0px 60px 0px 60px;
  border:none;
  font-weight:bold;
  cursor:pointer;
  @media(max-width:768px){
    background:${theme.colors.colorOne};
    color:${theme.colors.colorFour};
    margin-bottom:20px;
  }

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.8);
  }

`;
export const Modal = Styled.div`  
  position: absolute;
  transform:translate(-50%,- 50%);
  top: 35%;
  left: 35%;
  width: 400px;
  background: white;
  border: 2px solid #000;
  box-shadow: 4px black;
  padding:32px;
  
  @media(max-width:768px){
    position: absolute;
    transform:translate(-50%,- 50%);
    top: 20%;
    left: 10%;
  }

`;
export const PositionI = Styled.div`
  display:inline-block;
  float:right;
`;
export const H1 = Styled.h1`
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
  height:94px;
  float:right;

}
`;
export const DivM = Styled.div`
 @media (max-width:768px){
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:${theme.colors.colorFour};
  width:100px;
  gap:4px;
  border-radius:20px;
  height:150px;
 }
`;

export const LogoOpus = Styled.img`
  height: 50px;
  width: 50px;
`;
export const iconResponsi = Styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    text-align:center;
    margin-top:10px;
    cursor:pointer;
    font-size:30px;
  }
`;
