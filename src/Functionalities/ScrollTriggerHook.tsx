import {
  AppBar,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

export const ScrollTriggerHook = () => {
  // Devuelve true cuando va hacia abajo, false cuando sube
  const trigger = useScrollTrigger({
    disableHysteresis: true, // Marca false en el scroll hacia arriba hasta llegar casi al tope
    // Indica cuanto se debe hacer scroll para activar el trigger (PX)
    // Aplica tambien al Hysterisis
    threshold: 150,
    // target // WIndow por defecto. Indica el componente del cual revisar el scroll.
  });
  return (
    <div style={{ height: "150rem" }}>
      <Slide in={!trigger} appear={false}>
        <AppBar sx={{ bgcolor: "lightcyan" }}>
          <Toolbar>
            <Tabs
              sx={{ width: "100%" }}
              variant="fullWidth"
              value="My Option 1"
            >
              <Tab label="My Option 1" />
              <Tab label="My Option 2" />
              <Tab label="My Option 3" />
              <Tab label="My Option 4" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  );
};
