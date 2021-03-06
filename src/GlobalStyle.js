import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: ${({ theme }) => theme.color.gallery};
        word-break: break-word;
    }   
`;