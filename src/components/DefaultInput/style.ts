import styled from "styled-components";

export const ContainerInput = styled.aside`
    display: flex;
    flex-direction: column;
`;
export const Label = styled.label`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: black;
    margin-bottom: 5px;
`;

export const DefaultInput = styled.input`
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: black;
    padding: .5rem 1rem;
    border: solid 1px #f5f5f5;
    background-color: #f5f5f5;
    border-radius: 15px;
    min-width: 300px;
    transition: all .3s ease-in-out;
    outline: none;
    height: 35px;

    &:focus{
        background-color: white;
        border-color: gainsboro;
    }
`;
