import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import { App } from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { TextfieldComponent } from "./components/InputCommponents/TextfieldComponent";
// import { AutocompleteComponent } from "./components/InputCommponents/autocomplete";
// import { ButtonComponent } from "./components/InputCommponents/ButtonComponent";
// import { ButtonGroupComponent } from "./components/InputCommponents/ButtonGroupComponent";
// import { CheckBoxComponent } from "./components/InputCommponents/CheckBoxComponent";
// import { FloatingButtonComponent } from "./components/InputCommponents/FloatingButtonComponent";
// import { FormComponents } from "./components/InputCommponents/FormComponents";
// import { RadioComponent } from "./components/InputCommponents/RadioComponent";
// import { RatingComponent } from "./components/InputCommponents/RatingComponent";
// import { SelectComponent } from "./components/InputCommponents/SelectComponent";
// import { SliderComponent } from "./components/InputCommponents/SliderComponent";
// import { SwitchComponent } from "./components/InputCommponents/SwitchComponent";
import { ToggleBtnComponent } from "./components/InputCommponents/ToggleBtnComponent";
import { AssignmentInputs } from "./components/Assignments/AssignmentInputs";
import { AvatarComponent } from "./components/Assignments/DataDisplayComponents/AvatarComponent";
import { BadgeComponent } from "./components/Assignments/DataDisplayComponents/BadgeComponent";
import { ChipComponent } from "./components/Assignments/DataDisplayComponents/ChipComponent";
import { DividerComponent } from "./components/Assignments/DataDisplayComponents/DividerComponent";
import { ListComponent } from "./components/Assignments/DataDisplayComponents/ListComponent";
import { IconsMUI } from "./components/Assignments/DataDisplayComponents/IconsMUI";

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
      <IconsMUI />
    </ThemeProvider>
  </StrictMode>
);
