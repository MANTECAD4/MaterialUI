import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import { App } from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { AutocompleteComponent } from "./components/autocomplete";

declare module "@mui/material/styles" {
  // interface CommonColors {
  //   royalBlue: string;
  // }
}

const theme = createTheme({});

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <AutocompleteComponent />
  </ThemeProvider>
  // {/* </StrictMode> */}
);
