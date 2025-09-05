import { Button, Grid, Tooltip, Fade, Zoom } from "@mui/material";

// Uso de tooltip con componentes de ajenos a MUI
import { forwardRef } from "react";

const MyBtn = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button {...props} ref={ref}>
      Buttonnnn
    </button>
  );
});
export const TooltipComponent = () => {
  return (
    <Grid sx={{ p: 20, width: 300 }}>
      <Tooltip
        // disableFocusListener // No aparece con focus
        // disableHoverListener // no apaarece con hover
        // disableTouchListener // No aparece al mantener presionado el celulares
        // disableInteractive // Evita que podamos interactuar con el tooltup desaparece
        //
        // Personalizacion de la transición
        // slotProps={{ transition: { timeout: 300 } }}
        // slots={{ transition: Zoom }}
        // followCursor // El tooltip sigue el cursor dentro del elemento
        // enterDelay={3000} // Retrasar la aparicion
        // leaveDelay={500} // Retrasar la salida
        // open={true} //Para permitir que se muestre programaticamente
        // onOpen={() => {}}
        // onClose={() => {}}
        describeChild // Para accesibilidad. toma el title y lo uso coamo labeldel child
        placement="bottom"
        title="Create a new entry"
        arrow
        slotProps={{
          // Estilos etiqueta
          tooltip: {
            sx: {
              "&.MuiTooltip-tooltip": {
                // width: 300,
                bgcolor: "black",
                color: "white",
                fontFamily: "cursive",
                fontSize: 15,
              },
            },
          },
          // Estilos flechita
          arrow: { sx: { color: "grey", fontSize: 25 } },
        }}
      >
        <Button variant="outlined" color="success" sx={{ mb: 3 }}>
          Create
        </Button>
      </Tooltip>
      {/* <Tooltip title="This shit">
        <MyBtn />
      </Tooltip> */}
    </Grid>
  );
};
