import { styled } from "styled-components";

export const AboutUsCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 400px;
    }

    @media (max-width: 1368px) and (min-width: 768px){
        img {
            width: 300px;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;

        img {
            width: 200px;
        }
    }
`

export const AboutUsStory = styled.div`
    padding: 20px;
`