import { Button, Paper, Popper, Zoom } from "@mui/material";
import { useReducer, useRef } from "react";

export const PopperFunctionality = () => {
  const anchorEl = useRef(null);
  const [showPopper, toggleShowPopper] = useReducer((state) => !state, false);
  const id = showPopper ? "my-popper" : undefined;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        variant="outlined"
        ref={anchorEl}
        onClick={() => toggleShowPopper()}
        aria-describedby={id}
      >
        Show popper
      </Button>
      <Popper
        id={id}
        open={showPopper}
        anchorEl={anchorEl.current}
        placement="bottom-end"
        transition // Booleano requerido para el correcto funciomamiento de las transiciones
      >
        {({ TransitionProps }) => (
          <Zoom in={showPopper} {...TransitionProps}>
            <Paper sx={{ p: 1 }} variant="outlined">
              My Popper
            </Paper>
          </Zoom>
        )}
      </Popper>
    </div>
  );
};
