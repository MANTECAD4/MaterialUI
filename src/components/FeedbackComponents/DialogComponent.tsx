import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Zoom,
} from "@mui/material";
import { useState } from "react";

export const DialogComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setShow(true)}>
        Show dialog
      </Button>
      <Dialog
        // transitionDuration={2000}
        //   keepMounted // Para evitar que el componente se desmonte del DOM (pasa a estar oculto)
        // fullScreen
        // fullWidth // Amplia la longitud a la especificada por maxWIdth (deja unos margenes)
        // maxWidth={"xl"}
        // scroll="paper" // (paper | body) Para indicar si hace scroll en la pagina o dentro del dialog body

        open={show}
        onClose={() => setShow(false)}
        slots={{ transition: Zoom }}
        sx={{ bgcolor: "rgba(32, 38, 150, 0.46)" }}
        slotProps={{ paper: { sx: { bgcolor: "lightsteelblue" } } }}
      >
        <DialogTitle sx={{ color: "white", fontFamily: "sans-serif" }}>
          Delete this entry?
        </DialogTitle>
        <DialogContent dividers sx={{ borderWidth: 5 }}>
          <DialogContentText sx={{ color: "blue" }}>
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", height: "4rem" }}>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              console.log("Deleted!");
              setShow(false);
            }}
          >
            Delete
          </Button>
          <Button color="info" variant="text" onClick={() => setShow(false)}>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
