import styled from "styled-components";

export const Main = styled.main`
  
  height: 100vh;
  
`
export const Div = styled.div`
  /* margin: auto;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center; */
  display: flex;
  margin: 50px auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  
  @media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
}
    
`
export const Text = styled.h1`
  /* border: 1px solid black; */
  color: #ffffff;
  flex: 1;
  margin: 0px 50px 70px 190px;
  text-align: center;
  //margin-right: 20px;

  @media (max-width: 768px) {
  margin-right: 0;
  margin-bottom: 10px;
}

`
export const Img = styled.img`
  width: 39%;
  margin: 50px 95px;
  float: right;
  /* border: 2px black solid; */


  @media (max-width: 768px) {
  width: 100%;
}
`