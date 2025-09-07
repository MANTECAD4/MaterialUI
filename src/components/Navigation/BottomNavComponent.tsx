import { Favorite, ShoppingCart, PriceChange, Sell } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";

export const BottomNavComponent = () => {
  const [selectedOption, setSelectedOption] = useState("Add");
  return (
    <>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          value={selectedOption}
          onChange={(event, newValue) => setSelectedOption(newValue)}
          sx={{
            // Estilos boton selecto
            "& .MuiBottomNavigationAction-root.Mui-selected": {
              bgcolor: "whitesmoke",
            },
            // Etiquetas
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "cursive",
              "&.Mui-selected": { fontWeight: "bold" },
            },
            // Iconos
            "& .MuiSvgIcon-root": {
              fill: "brown",
              fontSize: 30,
            },
            // icono boton seleccionado
            "& .Mui-selected .MuiSvgIcon-root": {
              fill: "red",
            },
          }}
          showLabels
        >
          <BottomNavigationAction
            // component={}
            label={"Add"}
            value={"Add"}
            icon={<Favorite />}
          />
          <BottomNavigationAction
            label={"Shop"}
            value={"Shop"}
            icon={<ShoppingCart />}
          />
          <BottomNavigationAction
            label={"Price"}
            value={"Price"}
            icon={<PriceChange />}
          />
          <BottomNavigationAction
            label={"Ticket"}
            value={"Ticket"}
            icon={<Sell />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};
