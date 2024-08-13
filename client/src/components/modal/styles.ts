import Styled from "styled-components";

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
