import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { useWindowDimensions } from "./Hooks/useWindowDimensions";
import { defaultTheme } from "./styles/Theme";

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalCss />
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
    
    </ThemeProvider>
  );
};

export default App;
