import {
  AssistWalker,
  BabyChangingStation,
  Bathtub,
} from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";

export const ToggleBtnComponent = () => {
  //   const [value, setValue] = useState("bath"); // Para seleccion de un unico elemento

  const [value, setValue] = useState(["bath"]); // Seleccion de multiples valores
  // Forzar a tener siempreun valor seleccionado
  const handleChange = (event: any, newValue: string[]) => {
    if (newValue.length < 1) return;
    setValue(newValue);
  };
  return (
    <div>
      <ToggleButtonGroup
        // orientation="vertical"
        // exclusive // Limitar selección a un valor
        value={value}
        onChange={handleChange}
        // disabled
        sx={{
          // Estilos para cuando se deshabiliten todos los botones
          "& .MuiToggleButton-root.Mui-disabled": {
            opacity: 0.75,
          },

          // Esilos todos los botones (seleccionados y no seleccionados)
          "& .MuiToggleButton-root": {
            padding: 3,
            borderColor: grey[900],
            color: "black",
            // Modificacion tamaño icono
            "& > svg": {
              fontSize: 50,
            },
          },

          // Boton seleccionado
          "& .MuiToggleButton-root.Mui-selected": {
            bgcolor: red[600],
            // color: (theme) => theme.palette.getContrastText(red[600]),
          },
          "& .MuiToggleButton-root.Mui-selected:hover": {
            bgcolor: red[900],
            // color: (theme) => theme.palette.getContrastText(red[900]),
          },

          // Boton no seleccionado
          "& :not(.Mui-selected).MuiToggleButton-root": {
            color: grey[700],
            bgcolor: red[100],
            // color: (theme) => theme.palette.getContrastText(red[100]),
          },

          "& :not(.Mui-selected).MuiToggleButton-root:hover": {
            bgcolor: red[200],
            // color: (theme) => theme.palette.getContrastText(red[200]),
          },
        }}
        // Alternativa customización
        // sx={{
        //         bgcolor: "lightblue",
        //         "& > button": {
        //             borderColor: "green",
        //             padding: 0.25,
        //         },
        //         "& .Mui-selected": {
        //             bgcolor: "purple",
        //         },
        //         "& > button:hover": {
        //             bgcolor: "green",
        //         },
        //         "& .Mui-selected:hover": {
        //             bgcolor: "brown",
        //         },
        //         "& > button > svg": {
        //             fill: "red",
        //             height: "1rem",
        //             width: "1rem",
        //         },
        //         "& > button.Mui-selected > svg": {
        //             fill: "blue",
        //         },
        //     }}
      >
        <ToggleButton value={"bath"}>
          <Bathtub />
        </ToggleButton>
        <ToggleButton value={"old-man"}>
          <AssistWalker />
        </ToggleButton>
        <ToggleButton value={"mom"}>
          <BabyChangingStation />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
