import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`  
  position: absolute;
  transform:translate(-50%,- 50%);
  top: 35%;
  left: 35%;
  width: 500px;
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding:10px;
  border: 1px solid black;

  @media(max-width:768px){
    position: absolute;
    transform:translate(-50%,- 50%);
    top: 20%;
    left: 10%;
  }

`;
export const conteiner = Styled.div`
  width: 80%;
  margin: auto;
  border: 1px solid blue;
`
export const PositionI = Styled.div`
  display:inline-block;
  float:right;
  /* border: 1px solid black; */
  /* margin-top: -2p?x; */
  color: #ffffff;
`;
export const cx = Styled.div`
  /* height: 50px; */
  background: #ffffff;
  width: 80%;
  border-radius: 7px;
  padding: 10px;
  /* align-items: center; */
  margin: 10px auto;
  
`
export const H1 = Styled.h2`
  font-weight:bold;
  
`
export const titulo = Styled.p`
  
`
export const divEsquecerSenha = Styled.div`
  border: 1px solid violet;
  

`
export const esquecerSenha = Styled.p`
  color: #ffffff;
  
`

export const divCadastros = Styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 5px;
`