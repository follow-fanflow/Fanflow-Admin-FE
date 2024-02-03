import { ThemeProvider } from "styled-components";
import { Router } from "./router/router";
import { GlobalStyle } from "./styles/globalStyle";
import { GlobalFont } from "./styles/globalFont";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
