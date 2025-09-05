import { Close, CrisisAlert } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Button, Collapse } from "@mui/material";
import { useState } from "react";

export const AlertComponent = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Collapse in={open}>
        <Alert
          // Por defecto, no se pueden tener onClick y onClose al mismo tiempo
          //   onClose={() => {}} // Al cerrar. Renderiza un boton con una X Mejor usar action + onClick en ese elemento
          // onClick={() => console.log("Error: Something went wrong")} // Al hacer click en la alerta o el boton de action
          action={
            <Box sx={{ display: "flex", height: "100%", alignItems: "center" }}>
              <Button
                onClick={() => setOpen(false)}
                variant="contained"
                color="error"
                size="small"
              >
                close
              </Button>
            </Box>
          }
          variant="filled" // Variantes similar a los botones
          severity="error" // APlica color e icono predeterminados
          icon={
            // Centrar el icono
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <CrisisAlert />
            </Box>
          }
          sx={{
            bgcolor: "crimson",
            fontFamily: "cursive",
            maxWidth: 500,
            "& .MuiSvgIcon-root": {
              fill: "orange",
              fontSize: 30,
            },
          }}
        >
          <AlertTitle
            sx={{
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            My Alert
          </AlertTitle>
          Fuck! Something went wrong.
        </Alert>
      </Collapse>
      {/* <Button
        onClick={() => setOpen(true)}
        variant="contained"
        color="info"
        sx={{}}
      >
        open
      </Button> */}
    </>
  );
};
