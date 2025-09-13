import {
  Stepper,
  Step,
  StepLabel,
  StepButton,
  StepConnector,
  stepConnectorClasses,
  // StepContent,
  // StepIcon,
  Button,
  Box,
  Typography,
  Divider,
  StepContent,
} from "@mui/material";
import { useStepper } from "./useStepper";
import { styled } from "@mui/material/styles";

// Para la variante VERTICAL aplicar los estilos al border izquierdo (borderLeftColor, BorderLeftStyle,)
const CustomConnector = styled(StepConnector)(({ theme }) =>
  theme.unstable_sx({
    [`& .${stepConnectorClasses.line}`]: {
      borderWidth: 2,
      borderColor: "chocolate",
      borderStyle: "dashed",
      mx: 1,
    },
  })
);

export const NonLinearStepperComponent = () => {
  const {
    active,
    handleNext,
    handlePrevious,
    steps,
    handleCancelComplete,
    handleComplete,
    completed,
    setActive,
  } = useStepper();

  return (
    <>
      <Divider textAlign="center" sx={{ my: 4 }}>
        <Typography variant="h5" color="primary">
          Non Linear Stepper
        </Typography>
      </Divider>
      <Stepper
        activeStep={active}
        // orientation="vertical"
        nonLinear
        alternativeLabel // No usar con orientacion vertical
        connector={<CustomConnector />}
      >
        {steps.map((step, i) => (
          <Step
            key={step}
            completed={completed[`${i}`]}
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
              },
              "& .MuiStepLabel-label.Mui-active": {
                fontWeight: "bold",
              },
            }}
          >
            <StepButton
              // disableRipple
              // icon={completed[i] && <VerifiedUser />} // Para sobreescribir el icono de completed
              optional={
                i === 0 ? (
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "cursive",
                      fontSize: 10,
                      fontWeight: i === active ? "bold" : "",
                    }}
                  >
                    Optional
                  </Typography>
                ) : (
                  false
                )
              }
              onClick={() => setActive(i)}
            >
              <StepLabel error={i === 2}>{step}</StepLabel>
            </StepButton>
            {/* <StepContent>gysdvcbsydghcbsd chjsdbc hsdjnc</StepContent> */}
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          "& .MuiButton-root": { mx: 1 },
        }}
      >
        <Button disabled={active === 0} onClick={handlePrevious}>
          Back
        </Button>
        <Button
          disabled={completed[`${active}`]}
          variant="outlined"
          onClick={handleComplete}
        >
          mark as Completed
        </Button>
        {`Current step ${active + 1}`}
        <Button
          disabled={!completed[`${active}`]}
          variant="outlined"
          color="error"
          onClick={handleCancelComplete}
        >
          mark as unCompleted
        </Button>
        <Button disabled={active >= steps.length - 1} onClick={handleNext}>
          Next
        </Button>
      </Box>
    </>
  );
};
