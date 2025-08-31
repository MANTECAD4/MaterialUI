import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export const SwitchComponent = () => {
  const [value, setValue] = useState(true);
  return (
    <>
      <FormControlLabel
        labelPlacement="start"
        label=""
        // disabled
        control={
          <Switch
            value={value}
            size="small"
            aria-label="My Switch"
            onChange={(event, newValue) => setValue(newValue)}
            sx={{
              // Estilos del thumb cuando está apagado (a la izuqierda)
              "& :not(.Mui-checked).MuiSwitch-switchBase": {
                color: "green",
                // Para cuando se altera el tamaño, ajustar al tanteo
                transform: "traslateX(-20px)",
                // Estilos del thumb cuando está encendido (a la derecha)
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "red",
                // Para cuando se altera el tamaño, ajustar al tanteo
                transform: "translateX(100px)",
              },
              // Estilos de la barra sin seleccionar
              "& .MuiSwitch-track": {
                bgcolor: "green !important",
                // Para cuando se altera el tamaño, ajustar al tanteo
                borderRadius: 50,
              },
              // Estilos de la barra seleccionada
              "& .Mui-checked + .MuiSwitch-track": {
                bgcolor: "red !important",
                // Para cuando se altera el tamaño, ajustar al tanteo
                borderRadius: 50,
              },
              // No cusomizar, se ve horrible xd
              // Para cuando se altera el tamaño, ajustar al tanteo
              height: 60,
              width: 150,
              overflow: "visible",
              "& .MuiSwitch-thumb": {
                height: 50,
                width: 50,
              },
            }}
          />
        }
      />
    </>
  );
};
