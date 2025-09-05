import { Close, CrisisAlert } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Fade,
  IconButton,
  Snackbar,
  Zoom,
} from "@mui/material";
import { useState } from "react";

export const SnackbarComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Snackbar
        open={true}
        onClose={() => setShow(false)}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        message="Entry updated"
        action={
          <>
            <Button variant="text">undo</Button>
            <IconButton color="error">
              <Close />
            </IconButton>
          </>
        }
        slots={{ transition: Zoom }}
        sx={{
          "& .MuiSnackbarContent-root": {
            bgcolor: "lightcoral",
            ontFamily: "cursive",
          },
        }}
      >
        {/* <Alert
          action={
            <Box sx={{ display: "flex", height: "100%", alignItems: "center" }}>
              <Button variant="contained" color="error" size="small">
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
        </Alert> */}
      </Snackbar>
      <Button onClick={() => setShow((showPrev) => !showPrev)}>
        Show snackbar
      </Button>
    </>
  );
};
