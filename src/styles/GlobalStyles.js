import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @keyframes slide {
        0% {
            opacity: 0;
            top: -200px
        }

        75% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
            top: 70px
        }
    }

    :root {
        // poner colores
        --light-red: #FF0000;
        --dark-red: #CC0000;
        --light-blue: #5C6BC0;
        --blue: #3B4CCA;
        --yellow: #FFDE00;
        --gold: #B3A125;
        --background-card: 255, 255, 255, 0.7;
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
            /* color: #fff; */
        }

        a:visited {
            /* color: #fff; */
        }

        li {
            list-style: none;
        }
    }
`;
