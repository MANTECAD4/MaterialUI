import {
  Button,
  Box,
  Typography,
  Divider,
  MobileStepper,
  mobileStepperClasses,
} from "@mui/material";
import { useStepper } from "./useStepper";

export const MobileStepperComponent = () => {
  const { descriptions, active, handleNext, handlePrevious, steps } =
    useStepper();

  return (
    <>
      <Divider textAlign="center" sx={{ my: 4 }}>
        <Typography variant="h5" color="primary">
          Mobile Stepper
        </Typography>
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <MobileStepper
          position="static"
          variant="dots"
          steps={steps.length}
          activeStep={active}
          nextButton={
            <Button
              disabled={active >= steps.length - 1}
              onClick={handleNext}
              sx={{ ml: 2 }}
            >
              {active >= steps.length - 1 ? "finish" : "next"}
            </Button>
          }
          backButton={
            <Button
              disabled={active === 0}
              onClick={handlePrevious}
              sx={{ ml: 2 }}
            >
              Back
            </Button>
          }
          slotProps={{
            // Estilos variante linear progress
            // progress: {
            //   sx: {
            //     bgcolor: "lightcyan",
            //     height: "0.5rem",
            //     mx: "3rem",
            //     "& .MuiLinearProgress-bar": { bgcolor: "lightskyblue" },
            //   },
            // },
            // Estilos para la variante DOTS
            dots: {
              sx: {
                [`& .${mobileStepperClasses.dot}`]: {
                  height: 20,
                  width: 20,
                  mx: "1rem",
                },
                [`& .${mobileStepperClasses.dotActive}`]: {
                  bgcolor: "darkblue",
                },
                [`& .${mobileStepperClasses.dot}:not(.${mobileStepperClasses.dotActive})`]:
                  {
                    bgcolor: "lightskyblue",
                  },
              },
            },
          }}
          // Estilos stepper generales y variante text
          sx={{ width: 500, fontFamily: "cursive", color: "brown" }}
        />
      </Box>
    </>
  );
};
