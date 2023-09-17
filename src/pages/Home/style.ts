import styled from "styled-components"

export const Container = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Content = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: #fff7eb; */
    padding: 4rem 1rem;
    border-radius: 15px;
    box-shadow: 0px 0px 10px gainsboro;
`

export const FormSignIn = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ContainerImage = styled.picture`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Image = styled.img`
    max-width: 100px;
`

export const WelcomeText = styled.h3`
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin: 1.5rem 0 2rem 0;
`


// .formLogin{

// }

// .buttonSignin{
//     background - color: #0E492D;
//     color: white;
//     border - style: none;
//     border - radius: 20px;
//     padding: .3rem .5rem;
//     width: fit - content;
//     font - size: 14px;

// }