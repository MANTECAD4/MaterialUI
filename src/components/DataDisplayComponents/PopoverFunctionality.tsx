import { Button, Popover, Typography } from "@mui/material";
import { useReducer, useRef, useState } from "react";

export const PopoverFunctionality = () => {
  //   const [showPopover, toggleShowPopover] = useReducer((state) => !state, false);
  const [btnRef, setBtnRef] = useState<null | HTMLButtonElement>(null);
  const showPopover = Boolean(btnRef);
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
        onClick={(event) => setBtnRef(event.currentTarget)}
        variant="outlined"
        // sx={{ ml: 100 }}
      >
        My button
      </Button>
      <Popover
        // transitionDuration={800} // Duración de animación entrada/salida
        anchorEl={btnRef} // Elemento al que está anclado
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }} // Punto desde el cual brota EN EL ANCHOR ELEMENT
        transformOrigin={{ horizontal: "right", vertical: "top" }} // PUNTO DESDE EL QUE BROTA EN EL POPOVER
        open={showPopover}
        onClose={() => setBtnRef(null)}
        sx={{ mt: "10px" }}
      >
        <Typography sx={{ p: 1 }}>Content of the popover.</Typography>
      </Popover>
    </div>
  );
};
