import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Toolbar,
  useScrollTrigger,
  Typography,
  Slide,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef, useReducer } from "react";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  height: `calc(${theme.mixins.toolbar.minHeight}px + 1rem)`, // Tantearle al ajuste
}));

export const AppbarComponent = forwardRef<
  HTMLElement,
  React.ComponentProps<typeof AppBar>
>((props, ref) => {
  // const [show, toggleShow] = useReducer(s => !s, false)
  const trigger = useScrollTrigger();
  return (
    <>
      <Slide in={!trigger}>
        <AppBar
          // Para indicar el posicionamiento
          // Absolute - se queda atras en caso de scroll hacia abajo
          // Fixed -permanece en todo momento en su lugar
          // Relative - ofrece unos margenes. Ya incluye desplazamiento ( no necesidad de div offset). Se coloca
          // donde se le indique (absolute y fixed siempre van arriba)
          // Static - similar a relative, pero no admite modificaciones al posicionamiento
          // Sticky - permite colocarlo donde se le indique, adempas de que se fija  ala parte superior de la
          // pantalla en caso de hacer scroll hacia abajo
          // sx={{ top: "auto", bottom: 0 }} // Para colocar la barra abajo
          {...props}
          ref={ref}
          position="fixed"
          sx={{
            bgcolor: "lightskyblue",
            boxShadow: 10,
            height: 70,
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid
              container
              direction={"row"}
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <IconButton>
                <Menu />
              </IconButton>
              <Typography variant="h6"> JournalApp</Typography>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: 250,
              }}
            >
              <ButtonGroup>
                <Button variant="text" color="info">
                  HOME
                </Button>
                <Button variant="text" color="info">
                  blog
                </Button>
                <Button variant="text" color="info">
                  products
                </Button>
              </ButtonGroup>
              <Avatar />
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <Offset />
      {/* <Box sx={(theme) => ({ ...theme.mixins.toolbar })} /> */}
      <Typography>Scroll down to hide the appbar</Typography>
      <div style={{ height: "150rem" }}></div>
    </>
  );
});
