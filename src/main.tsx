import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mui/material/styles";

// import "./index.css";
// import { App } from "./App.tsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { NoSSRFunctionality } from "./Functionalities/NoSSRFunctionality";
import { PopperFunctionality } from "./components/DataDisplayComponents/PopperFunctionality";
import { PopoverFunctionality } from "./components/DataDisplayComponents/PopoverFunctionality";
import { PortalFunctionlity } from "./Functionalities/PortalFunctionlity";
import { TextAreaAutoSizeFunctionality } from "./Functionalities/TextAreaFunctionality";
import { TransitionsFunctionality } from "./Functionalities/Transitions/TransitionsFunctionality";
import { TransitionGroupFunctionality } from "./Functionalities/Transitions/TransitionGroupFunctionality";
import { UseMediaQueryFunctionality } from "./Functionalities/UseMediaQueryFunctionality";
//

let theme = createTheme({
  // typography: {
  //   fontWeightBold: 900,
  //   body1: { fontFamily: "cursive" /* color: "brown" */ },
  // },
  // palette: {
  //   mode: "light",
  // },
});

// theme = createTheme(theme, {
//   palette: {
//     background: {
//       default: theme.palette.mode === "dark" ? "purple" : "yellow",
//     },
//   },
// });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <UseMediaQueryFunctionality />
    </ThemeProvider>
  </StrictMode>
);
