import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`


export const ContainerGeral2 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(149, 1, 1, 1);
`

export const ContainerCenter = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`