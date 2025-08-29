import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import { App } from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { AutocompleteComponent } from "./components/autocomplete";
import { ButtonComponent } from "./components/ButtonComponent";
import { ButtonGroupComponent } from "./components/ButtonGroupComponent";
import { CheckBoxComponent } from "./components/CheckBoxComponent";
import { FloatingButtonComponent } from "./components/FloatingButtonComponent";
import { FormComponents } from "./components/FormComponents";
import { RadioComponent } from "./components/RadioComponent";
import { RatingComponent } from "./components/RatingComponent";
import { SelectComponent } from "./components/SelectComponent";
import { SliderComponent } from "./components/SliderComponent";
import { SwitchComponent } from "./components/SwitchComponent";

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
      <SwitchComponent />
    </ThemeProvider>
  </StrictMode>
);
