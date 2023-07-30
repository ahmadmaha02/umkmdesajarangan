import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { useWindowDimensions } from "./Hooks/useWindowDimensions";
import { defaultTheme } from "./styles/Theme";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import ContactPage from "./pages/Contact/ContactPage";

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalCss />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About /> } />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
    
    </ThemeProvider>
  );
};

export default App;
