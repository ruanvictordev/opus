import { createGlobalStyle } from "styled-components";
// import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    }
    button{
        cursor:pointer;
    }
    body, button, input{
        font-family: "Inter", sans-serif;
    }

`;


