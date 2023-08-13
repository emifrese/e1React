import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        // poner colores
        --light-red: #FF0000;
        --dark-red: #CC0000;
        --blue: #3B4CCA;
        --yellow: #FFDE00;
        --gold: #B3A125;
        --font-body: "PT Sans", sans-serif;
        --font-heading: "Kanit", sans-serif;
    }

    * {
        box-sizing: border-box;
        font-family: var(--font-body);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background: #ffffff;
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
