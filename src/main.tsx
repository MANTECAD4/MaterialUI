import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mui/material/styles";

import "./index.css";
// import { App } from "./App.tsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { MenuComponent } from "./components/Navigation/MenuComponent";
import { PaginationComponent } from "./components/Navigation/PaginationComponent";
import { SpeedDialComponent } from "./components/Navigation/SpeedDialComponent";
import { LinearStepperComponent } from "./components/Navigation/Stepper/LinearStepperComponent";
import { NonLinearStepperComponent } from "./components/Navigation/Stepper/NonLinearSteppercomponent";
import { StepperComponents } from "./components/Navigation/Stepper/StepperComponents";
import { TabsComponent } from "./components/Navigation/Tabs/TabsComponent";
import { BoxFunctionality } from "./components/LayoutComponents/BoxFunctionality";
import { ContainerFunctionality } from "./components/LayoutComponents/ContainerFunctionality";
import { GridFunctionality } from "./components/LayoutComponents/GridFunctionality";
import { GridDemo } from "./components/LayoutComponents/GridDemo";
import { ImageListFunctionality } from "./components/LayoutComponents/ImageListFunctionality";
import { StackFunctionality } from "./components/LayoutComponents/StackFunctionality";
import { ClickAwayListenerFunctionality } from "./Functionalities/ClickAwayListenerFunctionality";
import { CssBaselineFunctionality } from "./Functionalities/CssBaselineFunctionality";
// import type { TextfieldComponent } from "./components/InputCommponents/TextfieldComponent";
// import { LinkComponent } from "./components/Navigation/LinkComponent";
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
// import { ToggleBtnComponent } from "./components/InputCommponents/ToggleBtnComponent";
// import { AssignmentInputs } from "./components/Assignments/AssignmentInputs";
// import { AvatarComponent } from "./components/DataDisplayComponents/AvatarComponent";
// import { BadgeComponent } from "./components/DataDisplayComponents/BadgeComponent";
// import { ChipComponent } from "./components/DataDisplayComponents/ChipComponent";
// import { DividerComponent } from "./components/DataDisplayComponents/DividerComponent";
// import { ListComponent } from "./components/DataDisplayComponents/ListComponent";
// import { IconsMUI } from "./components/DataDisplayComponents/IconsMUI";
// import { TableComponent } from "./components/DataDisplayComponents/TableComponent";
// import { TooltipComponent } from "./components/DataDisplayComponents/TooltipComponent";
// import { TypographyComponent } from "./components/DataDisplayComponents/TypographyComponent";
// import { AlertComponent } from "./components/FeedbackComponents/AlertComponent";
// import { BackdropComponent } from "./components/FeedbackComponents/BackdropComponent";
// import { ProgressComponent } from "./components/FeedbackComponents/ProgressComponent";
// import { DialogComponent } from "./components/FeedbackComponents/DialogComponent";
// import { SkeletonComponent } from "./components/FeedbackComponents/SkeletonComponent";
// import { SnackbarComponent } from "./components/FeedbackComponents/SnackbarComponent";
// import { AccordionComponent } from "./components/SurfaceComponents/AccordionComponent";
// import { AppbarComponent } from "./components/SurfaceComponents/AppbarComponent";
// import { PaperComponent } from "./components/SurfaceComponents/PaperComponent";
// import { CardComponent } from "./components/SurfaceComponents/CardComponent";
// import { BottomNavComponent } from "./components/Navigation/BottomNavComponent";
// import { BreadcrumbsComponent } from "./components/Navigation/BreadcrumbsComponent";
// import { PersistentDrawer } from "./components/Navigation/Drawer/PersistentDrawer";

// Para agregar nuevas variantes en TS
// declare module "@mui/material/styles" {
//   interface TypographyVariants {
//     bigText: React.CSSProperties;
//   }

//   interface TypographyVariantsOptions {
//     bigText?: React.CSSProperties;
//   }
// }
// declare module "@mui/material/Typography" {
//   //Para el autocompletado en variant=''
//   interface TypographyPropsVariantOverrides {
//     bigText: true;
//   }
// }

let theme = createTheme({
  typography: {
    fontWeightBold: 900,
    body1: { fontFamily: "cursive" /* color: "brown" */ },
  },
  palette: {
    mode: "light",
  },
});

theme = createTheme(theme, {
  palette: {
    background: {
      default: theme.palette.mode === "dark" ? "purple" : "yellow",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaselineFunctionality />
    </ThemeProvider>
  </StrictMode>
);
