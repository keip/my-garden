import React from "react";
import { createRoot } from "react-dom/client";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Garden from "./components/Garden.tsx";
import Box from "@mui/material/Box";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#76885B",
      dark: "#627254",
      contrastText: "#fff",
    },
    secondary: {
      main: "#bbb",
    },
  },
  shape: {
    borderRadius: 16,
  },
});

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Box py={6}>
            <Garden />
          </Box>
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(<App />);
