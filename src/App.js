import { GlobalStyle } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import LevelSelect from "./components/LevelSelect";
import Main from "./routes/Main";
import Game from "./routes/Game";

import { Route, BrowserRouter, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="game/:id" element={<Game />} />
          <Route path="/" element={<Main />}>
            <Route index element={<LevelSelect />} />
            <Route path="leader" element={"Leader"} />

            <Route path="*" element={"NO PAGE"} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
