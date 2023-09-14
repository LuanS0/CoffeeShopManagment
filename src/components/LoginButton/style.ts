import styled from "styled-components";

export const Button = styled.button`
    font-family: "GothamPro Medium", serif;
    font-size: 14px;
    font-weight: 400;
    color: white;
    background-color: #0E492D;
    border-style: none;
    padding: .8rem 3rem;
    border-radius: 20px;
    width: fit-content;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: #26905e;
    }
`;

