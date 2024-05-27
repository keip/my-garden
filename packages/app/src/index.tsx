import React from 'react';
import { createRoot } from "react-dom/client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducers from "./reducers/index.ts";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const store = configureStore({
  reducer: reducers,
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth={false}>
          <Grid container spacing={3}>
          </Grid>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(<App />);
