import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepContent,
  Button,
  Box,
  Typography,
  Divider,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useStepper } from "./useStepper";

const connectorStyles = {
  borderLeftWidth: 3,
  borderLeftColor: "lightskyblue",
  borderLeftStyle: "dashed",
  // height: "5rem",
};

const CustomConnector = styled(StepConnector)(({ theme }) =>
  theme.unstable_sx({
    [`& .${stepConnectorClasses.line}`]: connectorStyles,
  })
);

export const VerticalStepperComponent = () => {
  const { descriptions, active, handleNext, handlePrevious, steps } =
    useStepper();

  return (
    <>
      <Divider textAlign="center" sx={{ my: 4 }}>
        <Typography variant="h5" color="primary">
          Vertical Stepper
        </Typography>
      </Divider>
      <Stepper
        connector={<CustomConnector />}
        activeStep={active}
        orientation="vertical"
      >
        {steps.map((step, i) => (
          <Step
            key={step}
            expanded
            sx={{
              // Estilos iconos
              // Base
              "& .MuiSvgIcon-root": {
                fill: "lightblue",
                fontSize: 40,
                text: {
                  fontWeight: "bold",
                  fill: "whitesmoke",
                },
              },
              // Cuando esta activa - no aplica a completado ni error
              "&:not(.Mui-completed) .MuiSvgIcon-root.Mui-active:not(.Mui-error)":
                {
                  fill: "blue",
                },
              // Cuando el paso esta completado - el estado completado se coloca en la raiz
              "&.Mui-completed .MuiSvgIcon-root": {
                fill: "green",
              },
              // Cuando hay error
              "& .MuiSvgIcon-root.Mui-error": {
                fill: "crimson",
              },
              //
              // Estilos step label
              "& .MuiStepLabel-label": {
                fontFamily: "cursive",
                fontWeight: i === active ? "bold" : "",
              },
            }}
          >
            <StepLabel>{step}</StepLabel>
            <StepContent
              slotProps={{ transition: { unmountOnExit: false } }}
              sx={{ ...connectorStyles }}
            >
              {descriptions[i]}
            </StepContent>
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
