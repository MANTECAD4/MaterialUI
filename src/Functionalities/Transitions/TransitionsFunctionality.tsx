import { useReducer, useRef } from "react";
import {
  Collapse,
  Zoom,
  Fade,
  Grow,
  Slide,
  Button,
  Alert,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export const TransitionsFunctionality = () => {
  const [show, toggleShow] = useReducer((s) => !s, false);
  // const containerRef = useRef(null);
  return (
    <>
      <Button variant="outlined" onClick={toggleShow} sx={{}}>
        {show ? "Hide" : "show"} alert
      </Button>
      {/* <Collapse
        in={show}
        // collapsedSize={25} // Porcion que permanece sin ocultar. No compatible con unMountOnExit
        orientation="horizontal" // Cambia la orientación.
      >
        <Alert variant="filled" sx={{ width: 300 }}>
          <Typography noWrap>My Alert</Typography>
        </Alert>
        </Collapse> 
       <Fade in={show}>
        <Alert variant="filled" sx={{ width: 300 }}>
          <Typography noWrap>My Alert</Typography>
        </Alert>
      </Fade> 
      <Box
        sx={{
          "& > *": { transformOrigin: "bottom right" }, // CUstomizar origen desde donde crece
        }}
      >
      </Box> 
      <Slide in={show} direction="up" container={containerRef.current}>
      <Alert>My alert</Alert>
      </Slide>
      <div
        ref={containerRef}
        style={{ marginTop: 200, backgroundColor: "lightblue" }}
        >
        Hola
        </div> */}
      <Zoom in={show}>
        <Alert variant="filled">My alert</Alert>
      </Zoom>
    </>
  );
};
{
  /* <Collapse
  // Se plasma el contenido en el DOM cuando se llama a entrar por primera vez, no desde el inicio.
  // Por defecto esta presente, pero oculto.
  // mountOnEnter
  // unmountOnExit // Hacerlo desaparecer del DOM
  //
  // sx={{transitionDelay: "3000ms" }} // EL delay tiene que ser menor al timeout
  // duracion de la animación en Ms. Auto para que calcule según el tamaño
  // Acepta un objeto para especificar dudariones eespeicifcas en entrada o salida
  // timeout={{ enter: 5000, exit: 5000 }}
  //
  // Aceleración no lineal de las animaciones. Acepta enter / exit por separado
  // El theme tambien provee unas -> theme.transitions.easing.{Some easing effect}
  // easing={"cubic-bezier(1,0,0.1,1)"}
  //
  // Acciones cuando entra o sale el componente
  // Justo cuando empieza a entrar / salir
  // onExit={()=>{}}
  // onEnter={()=>{}}
  // CUando terminó  de entrar / salir
  // onExited={()=>{}}
  onEntered={() => {
    console.log("Finally entered");
  }}
  in={show}
  sx={{ width: 500 }}
>
  <Alert variant="filled">My alert</Alert>
</Collapse> */
}
