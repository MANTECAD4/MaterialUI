import {
  Box,
  ClickAwayListener,
  SpeedDial,
  SpeedDialAction,
  TextField,
  Select,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import { ComponentsLayout } from "../components/ComponentsLayout";
import { useState, useReducer } from "react";

export const ClickAwayListenerFunctionality = () => {
  const [bgcolor, setBgcolor] = useState("blue");
  // const [show, dispatch] = useReducer((state) => !state, false);
  // const [show, setShow] = useState(false);
  // const toggleShow = () => setShow((prev) => !prev);
  return (
    <>
      <ComponentsLayout title="ClickAwayListenerFunctionality">
        <ClickAwayListener
          onClickAway={() => setBgcolor("red")} // Acción a ejecutar al tocar afuera del elemento
          mouseEvent={"onPointerDown"} // Evento de Mouse a escuchar - false para deshabiltarlo
        >
          <Box
            sx={{
              // display: show ? "flex" : "none",
              transition: "0.2s background-color ease",
            }}
            bgcolor={bgcolor}
            height={"5rem"}
            width={"5rem"}
            onClick={() => setBgcolor("blue")}
          ></Box>
        </ClickAwayListener>
      </ComponentsLayout>
    </>
  );
};
