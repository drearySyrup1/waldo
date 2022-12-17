import { GlobalStyle } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import TopBar from "./components/TopBar";
import LevelSelect from "./components/LevelSelect";
const theme = {
  colors: {
    body: "hsl(0 0% 13%)",
    topbar: "hsl(0 0% 16%)",
  },
  mobile: {
    L: "425px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <TopBar />
        <LevelSelect />
      </>
    </ThemeProvider>
  );
}

export default App;
