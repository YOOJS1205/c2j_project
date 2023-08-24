import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        max-width: 480px;
        margin: 0 auto;
    }

    body {
        width: 100%;
        max-width: 480px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
