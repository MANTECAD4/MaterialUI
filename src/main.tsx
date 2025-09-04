import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mui/material/styles";

// import "./index.css";
// import { App } from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import type { TextfieldComponent } from "./components/InputCommponents/TextfieldComponent";
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
import { TableComponent } from "./components/Assignments/DataDisplayComponents/TableComponent";
import { TooltipComponent } from "./components/Assignments/DataDisplayComponents/TooltipComponent";
import { TypographyComponent } from "./components/Assignments/DataDisplayComponents/TypographyComponent";

// Para agregar nuevas variantes en TS
declare module "@mui/material/styles" {
  interface TypographyVariants {
    bigText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bigText?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  //Para el autocompletado en variant=''
  interface TypographyPropsVariantOverrides {
    bigText: true;
  }
}

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: "cursive",
    },
    bigText: { fontSize: 60 },
  },
  components: {
    MuiTypography: {
      defaultProps: { variantMapping: { h3: "div", bigText: "span" } },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <TypographyComponent />
    </ThemeProvider>
  </StrictMode>
);
