import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useState } from "react";

export const BackdropComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Backdrop
        // transitionDuration={2000}
        open={show}
        onClick={() => setShow(false)}
        sx={{ zIndex: 10, bgcolor: "rgba(0, 16, 193, 0.43)" }}
      >
        <CircularProgress sx={{ color: "whitesmoke" }} />
      </Backdrop>
      <Button onClick={() => setShow(true)}>Show backdrop</Button>
    </>
  );
};
