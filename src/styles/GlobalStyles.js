import { createGlobalStyle } from "styled-components";
import pokeball from '../assets/pokeball.png'

export const GlobalStyles = createGlobalStyle`
    :root {
        // poner colores
    }

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-image: url(${pokeball});
        background-size: 50px;
        background-color: #fff;
        font-family: "proxima-nova",sans-serif; //buscar proxima-nova
        color: #fff;
        a {
            text-decoration: none;
            color: #fff;
        }

        a:visited {
            color: #fff;
        }

        li {
            list-style: none;
        }
    }
`;
