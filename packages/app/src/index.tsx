import React from 'react';
import { createRoot } from "react-dom/client";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducers from "./reducers/index.ts";
import Garden from './components/Garden.tsx';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#76885B",
      dark: "#627254",
      contrastText: "#fff"
    },
    secondary: {
      main: "#bbb"
    }
  },
  shape: {
    borderRadius: 16
  }
});

const store = configureStore({
  reducer: reducers,
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Box py={6}>
            <Garden />
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(<App />);
