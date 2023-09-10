import styled from "styled-components"

export const ContainerHeader = styled.header`
    background-color: rgba(37, 35, 35, 1);
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 10%;
    justify-content: space-between;
`

export const TituloHeader = styled.h2`
    color: rgb(255, 255, 255);
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(228, 0, 0);
`

export const ImagemMenu = styled.img`
height: 35px;
width: 55px;

`

export const ImagemProfire = styled.img`
    width: 04%;
    height: 70%;
    margin: 10px;
`

export const BotaoHeader = styled.button`
    width:10%;
    padding: 15px;
    border: none;
    margin: 05px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #950101;
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`

// export const ContainerMenu = styled.div`
//     gap: 30px;
//     display: flex;  
//     align-items: center;
//     width: 100%;
//     background-color: pink;
// `
export const BotaoHambuurger = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
   
`
export const MenuLateral = styled.nav`
    width: 0px;
    height: 100vh;
    background-color: var(--branco);
    padding: 0px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: .2s;
    z-index: 2;

    &:hover{
        width: 384px;
    }
`

