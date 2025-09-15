import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  Typography,
  useTheme,
  tabClasses,
  svgIconClasses,
  tabsClasses,
  buttonBaseClasses,
  IconButton,
} from "@mui/material";
import { ComponentsLayout } from "../../ComponentsLayout";
import { useState } from "react";
import {
  ArrowBack,
  ArrowLeft,
  ArrowRight,
  Category,
  ConnectWithoutContact,
  Groups,
  Home,
  SkipNext,
} from "@mui/icons-material";

const allyProps = (index: number) => {
  return {
    id: "simple-tab-" + index,
    "aria-controsl": "simple-tabpanel-" + index,
  };
};
const CustomNextBtn = () => (
  <IconButton>
    <ArrowRight />
  </IconButton>
);
const CustomBackBtn = () => (
  <IconButton>
    <ArrowLeft />
  </IconButton>
);

export const TabsComponent = () => {
  const routes = [
    { icon: <Home />, label: "Home" },
    { icon: <Category />, label: "Products" },
    { icon: <Groups />, label: "About Us" },
    { icon: <ConnectWithoutContact />, label: "Contact" },
    { icon: <Home />, label: "Home" },
    { icon: <Category />, label: "Products" },
    { icon: <Groups />, label: "About Us" },
    { icon: <ConnectWithoutContact />, label: "Contact" },
    { icon: <Home />, label: "Home" },
    { icon: <Category />, label: "Products" },
    { icon: <Groups />, label: "About Us" },
    { icon: <ConnectWithoutContact />, label: "Contact" },
    // "Contact us but it is actually a very large title uwu",
    // "Sales",
    // "Foundation",
    // "Social media",
    // "Home",
    // "Products",
    // "About Us",
    // "Contact",
    // "Sales",
    // "Foundation",
    // "Social media",
  ];
  // ACepta un numero (asociado al index) o un valor personalizado (Asignado via value al Tab directamente)
  const [activePage, setActivePage] = useState(0);
  return (
    <ComponentsLayout title="Tabs component">
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "whitesmoke" }}>
          <Tabs
            // centered // No aplica en scrollable variant
            variant="scrollable" // Para muchas opciones, habilitar deplazamiento
            // scrollButtons={false} // Esconder los botones scroll
            // allowScrollButtonsMobile // Forzar la aparicion de los botones scroll
            // orientation="vertical" // Para desplegar verticalmente - bueno para mobiles + variant fullwidth
            //
            // Al mover la seleccion con las flechas, se establece como activo el elemento seleccionado
            // Por defecto, se tiene que presionar enter para activar la opcion
            // selectionFollowsFocus
            aria-label="Main Navigation"
            value={activePage}
            onChange={(_event, newPage) => setActivePage(newPage)}
            slots={{
              endScrollButtonIcon: CustomNextBtn,
              startScrollButtonIcon: CustomBackBtn,
            }}
            slotProps={{
              indicator: { sx: { bgcolor: "darkcyan", height: 3, mb: 0.5 } },
              scrollButtons: {
                // disableRipple: true,
                // sx: { "& > svg": { fill: "blue" } },
              },
              // endScrollButtonIcon: {},
            }}
            sx={{
              width: "100%",
              // Posicionar el Tabs sin no es variante fullwidth
              [`& .${tabsClasses.list}`]: {
                // justifyContent: "flex-end", //En vadiante horizontal
                // alignItems: "start", // en variante vertical
              },
            }}
          >
            {routes.map(({ label, icon }, index) => (
              <Tab
                // LinkComponent={Link} // Uso con react routerm por ejemplo
                // disabled={route === "Contact"}
                // value={route}
                // wrapped // Para etiquetas largas. COmpacta el texto
                {...allyProps(index)} // Para accesibilidad
                icon={icon}
                iconPosition="top"
                key={label}
                label={label}
                sx={{
                  // Estilos base (incluido texto)
                  color: "skyblue",
                  // CUando esta seleccionada
                  [`&.${tabClasses.selected}`]: {
                    color: "darkcyan",
                    // pt: 0,
                    // transition: "0.1s padding ease",
                  },
                  // Color de la seleccion de un boton con las teclas
                  [`&.${buttonBaseClasses.focusVisible}`]: {
                    color: "darkcyan",
                  },
                  //Estilos iconos
                  [`& .${tabClasses.icon}`]: { fontSize: 35 /* mb: 1 */ },
                }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Paper sx={{ mt: 2, height: 200, p: "1rem" }} elevation={5}>
        <Typography variant="h5" fontFamily={"cursive"}>
          {routes[activePage].label}
        </Typography>
      </Paper>
    </ComponentsLayout>
  );
};
