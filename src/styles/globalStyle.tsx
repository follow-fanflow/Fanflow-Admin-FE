import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "SOYOMapleBoldTTF";
        user-select: none;
    }

    input, textarea, button {
        border: none;
        outline: none;
        resize: none;
    }
    ::-webkit-calendar-picker-indicator {
            position: absolute;
            top: 0;
            padding-left: 500px;
            height: 100%;
        }
`;
