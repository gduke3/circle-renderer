import { createGlobalStyle } from "styled-components";

const GlobalHTMLStyles = createGlobalStyle`
    body {
        overflow: hidden;
        overflow-y: auto;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        background: white;
    }
    * {
        margin: 0;
        padding: 0;
        outline: none;
        color: inherit;
        background: initial;
        box-sizing: border-box;
        border: initial;
        font-family: inherit;
        font-weight: inherit;
        cursor: inherit;
        text-align: inherit;
        font-size: inherit;
        text-decoration: initial;
        word-wrap: break-word;
        text-transform: inherit;
    }
    .noselect {
        user-select: none;
    }
`;

export default GlobalHTMLStyles;
