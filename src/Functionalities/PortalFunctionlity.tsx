import {
  Portal,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useEffect, useReducer, useRef, useState } from "react";
export const PortalFunctionlity = () => {
  const [showPortal, toggleShowPortal] = useReducer((s) => !s, false);
  const boxRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    () => setMounted(true);
  }, []);

  return (
    <>
      <Button variant="outlined" onClick={toggleShowPortal}>
        {showPortal ? "hide" : "show"} Portal
      </Button>
      {showPortal && mounted && (
        <Portal container={boxRef.current}>
          <Typography>Teleported content waos</Typography>
        </Portal>
      )}
      <AppBar sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Typography>{"teleported content there ->"}</Typography>
          <Box ref={boxRef}></Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
