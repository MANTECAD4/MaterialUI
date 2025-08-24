import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import { App } from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { AutocompleteComponent } from "./components/autocomplete";
import { ButtonComponent } from "./components/ButtonComponent";
import { ButtonGroupComponent } from "./components/ButtonGroupComponent";
import { CheckBoxComponent } from "./components/CheckBoxComponent";

declare module "@mui/material/styles" {
  // interface CommonColors {
  //   royalBlue: string;
  // }
}

const theme = createTheme({
  // components: {
  //   MuiButton: {
  //     defaultProps: {
  //       variant: "contained",
  //     },
  //   },
  // },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CheckBoxComponent />
    </ThemeProvider>
  </StrictMode>
);
