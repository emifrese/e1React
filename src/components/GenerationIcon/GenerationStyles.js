import { styled } from "styled-components";

export const GenerationContainer = styled.div`
    border-radius: 100%;
    border: 2px solid #000;
    height: 100px;
    width: 100px;
    margin:auto;
    transition: 200ms all;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transform: ${props => props.selected ? "scale(1.1)" : "scale(1)"};

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
