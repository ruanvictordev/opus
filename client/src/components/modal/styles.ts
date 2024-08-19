import Styled, { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`  
  position: absolute;
  margin: auto;
  top: 10%;
  left: 35%;
  transform:translate(-50%,- 50%);
  /* width: 800px;
  height: 80%; */
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding:10px;
  /* border: 1px solid black; */

  @media(max-width:768px){
    margin: auto;
    width: 50%
    height: 50%;
    position: absolute;
    transform:translate(-50%,- 50%);
    top: 20%;
    left: 10%;
  }

`;
export const conteiner = Styled.div`
  /* margin-top: 50%; */
  /* top: -30%; */
  /* margin: auto;
  padding: 20% 10px; */
  margin: 10px;
  /* border: 1px solid blue; */
`;
export const PositionI = Styled.div`
  display:inline-block;
  float:right;
  /* border: 1px solid black; */
  /* margin-top: -2p?x; */
  color: #ffffff;
`;
export const cx = Styled.div`
  /* height: 50px; */
  /* border: 1px solid black; */
  background: #ffffff;
  width: 80%;
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 20px;
  margin: 10px auto;
  
`;
export const H1 = Styled.h2`
  font-weight:bold;
  margin: auto;
  /* border: 1px solid black; */
  
`;
export const inputs = Styled.div`
  /* border: 1px solid black; */
  display: flex;
  margin: 10px;
  flex-direction: column;
`;

export const titulo = Styled.input`
  border-radius: 7px;
  /* width: 80%; */
  padding: 10px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: auto 20px;
  margin-top: 7px;
`;
export const divEsquecerSenha = Styled.div`
  width: 70%;
  margin: auto;
  /* border: 1px solid violet; */

`;
export const esquecerSenha = Styled.p`
  color: #ffffff;
  cursor: pointer;
  
  
`;
export const tipoCandidato = Styled.div`
  /* border: 1px solid violet; */
  width: 80%;
  color: #ffffff;
  margin: 10px auto;
  
`
export const FormLabel = Styled.p`  
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;

`
// export const Radio = Styled.input.attrs({ type: 'radio' })`
 
//   /* Estilo para o estado de seleção */
//   /* &:checked {
//     background-color: #007bff;
//     border-color: #007bff;
//   } */
  
// `
export const labelCandidato = Styled.label`
  color: #ffffff;
`

export const btnEntrar = Styled.p`
  margin: auto;
  color: ${theme.colors.colorThree};
  cursor:pointer;
`;
export const divCadastros = Styled.div`
  width: 80%;
  margin: auto;
  display: flex;

  
  /* border: 1px solid black; */
  /* padding: 5px; */
`;
