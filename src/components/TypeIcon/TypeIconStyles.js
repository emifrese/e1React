import { styled } from "styled-components";

export const IconContainer = styled.div`
    border-radius: 100%;
    height: 100px;
    width: 100px;
    margin:auto;
    transition: 200ms all;

    &:hover{
        filter: saturate(200%);
        transform: scale(1.1);
        cursor: pointer;
    }

    img {
        height: 60%;
        width: 60%;
        margin: 20%;
    }
`
