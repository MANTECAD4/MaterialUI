import { Grid } from "@mui/material";
import { LinearStepperComponent } from "./LinearStepperComponent";
import { NonLinearStepperComponent } from "./NonLinearSteppercomponent";
import { VerticalStepperComponent } from "./VerticalStepperComponent";
import { MobileStepperComponent } from "./MobileStepperComponent";

export const StepperComponents = () => {
  return (
    <>
      <LinearStepperComponent />
      <NonLinearStepperComponent />
      <VerticalStepperComponent />
      <MobileStepperComponent />
    </>
  );
};
