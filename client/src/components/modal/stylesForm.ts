import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`  
  position: absolute;
  margin: auto;
  top: 5%;
  left:5%;
  bottom:5%;
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
  padding: 10px;
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

export const inputsForm = Styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;
`;

export const inputsFormTwo = Styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr); 
gap: 10px;
`;

export const buttonAdd = Styled.button`
  width:40px;
  height:40px;
`;

export const divTextarea = Styled.div`
  text-align:center;
`;
export const inputText = Styled.input`
  width:525px;
  height:200px;
  border-radius:10px;
  padding:10px 0px 0px 10px;
  box-sizing: border-box;

  /**::placeholder {
    color: #888;
    font-size: 16px;
    text-align: start;
    transform: translateY(-30%); 
  } */
  
`;

export const titulo = Styled.input`
  border-radius: 7px;
  /* width: 80%; */
  padding: 5px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: auto 10px;
  margin-top: 7px;
`;

export const btnEntrar = Styled.p`
  margin: auto;
  color: ${theme.colors.colorThree};
  cursor:pointer;
`;
