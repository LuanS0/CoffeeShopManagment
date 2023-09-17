import styled from "styled-components";

export const Button = styled.button`
    font-family: "GothamPro Medium", serif;
    font-size: 14px;
    font-weight: 400;
    color: white;
    background-color: #0E492D;
    border-style: none;
    padding: .8rem 3rem;
    border-radius: 15px;
    transition: background-color .3s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: #26905e;
    }

    &:active{
        background-color: #0E492D;
    }
`;

