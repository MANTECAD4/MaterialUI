import {
  Stepper,
  Step,
  StepLabel,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  Button,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { useStepper } from "./useStepper";

export const LinearStepperComponent = () => {
  const { active, handleNext, handlePrevious, steps } = useStepper();

  return (
    <>
      <Divider textAlign="center" sx={{ my: 4 }}>
        <Typography variant="h5" color="primary">
          Linear Stepper
        </Typography>
      </Divider>
      <Stepper activeStep={active}>
        {steps.map((step, i) => (
          <Step key={step}>
            <StepLabel error={i === 2}>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3 }}>
        {`Steps completed ${active}`}
        <Button disabled={active === 0} onClick={handlePrevious} sx={{ ml: 2 }}>
          Back
        </Button>
        <Button
          disabled={active >= steps.length}
          onClick={handleNext}
          sx={{ ml: 2 }}
        >
          {active >= steps.length - 1 ? "complete" : "next"}
        </Button>
      </Box>
    </>
  );
};
