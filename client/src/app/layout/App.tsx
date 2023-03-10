import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Catalog from "../../featues/catalog/Catalog";
import { Product } from "../models/Product";
import Header from "./Header";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}  />
      <Container>
        <Outlet/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
