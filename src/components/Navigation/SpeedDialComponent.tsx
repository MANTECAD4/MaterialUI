import { Save, Delete, Share, Add, Lightbulb } from "@mui/icons-material";
import {
  Button,
  Fade,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Zoom,
} from "@mui/material";
import { useState } from "react";

export const SpeedDialComponent = () => {
  const [showDial, setShowDial] = useState(false);
  const [openDial, setOpenDial] = useState(false);
  const saveFn = () => console.log("first");
  const deleteFn = () => console.log("scond");
  const shareFn = () => console.log("third");
  const actions = [
    { fn: saveFn, icon: <Save />, name: "Save" },
    { fn: deleteFn, icon: <Delete />, name: "Delete" },
    { fn: shareFn, icon: <Share />, name: "Share" },
  ];
  const handleOpen = () => setOpenDial(true);
  const handleClose = () => setOpenDial(false);
  return (
    <>
      <SpeedDial
        ariaLabel="Options"
        title="options"
        direction="left" // Direccion de despliegue. ALtera la posicion del speed dial tambien (BASTANTE BUGEADO)
        hidden={showDial} // Mostrar u ocultar speed dial
        // Gestionado por estado
        open={openDial} // Abribir o cerrar programaticamente
        onOpen={handleOpen} // Acciones al abrir on Hover
        onClose={handleClose} // Acciones on Mouse Leave
        // slots={{ transition: Fade }} // Transcion de entrada y salida
        // Iconos personalizados
        icon={
          <SpeedDialIcon
            icon={<Add />}
            openIcon={<Lightbulb />}
            sx={{
              // AJustar acomodo icono si se cambia de tamaño
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiSvgIcon-root": { fontSize: 40 },
            }}
          />
        }
        // Acceso al bton Fab (Boton flotante)
        FabProps={{
          sx: {
            bgcolor: "salmon",
            "&:hover": { bgcolor: "red" },
            height: "4rem",
            width: "4rem",
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={action.fn}
            key={action.name}
            icon={action.icon}
            title={action.name}
            sx={{
              // Estilos fab opciones
              bgcolor: "blue",
              "&:hover": { bgcolor: "darkblue" },
              // color: "white",
              width: "3.5rem",
              height: "3.5rem",
              // Iconos
              "& > svg": { fontSize: 35, fill: "white" },
            }}
          />
        ))}
      </SpeedDial>
      <Button onClick={() => setShowDial((prevValue) => !prevValue)}>
        SHow dial
      </Button>
      <Button onClick={() => setOpenDial((prevValue) => !prevValue)}>
        Open /close dial
      </Button>
    </>
  );
};
