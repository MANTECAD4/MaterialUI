import { CallReceived, CarCrashOutlined, Mail } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  Grid,
  responsiveFontSizes,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "react";

export const BadgeComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Grid sx={{ m: 3 }} direction="column">
      <Badge
        // variant="dot"
        // invisible={show}
        // anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        aria-label={`${10} Notifications`}
        title={`${10} Notifications`}
        max={5}
        showZero
        overlap="circular"
        badgeContent={10} // Acepta componentes, texto, numeros, iconos
        slotProps={{
          badge: {
            sx: {
              // Agregar espacio para usar en sx de Badge directamente
              "&.MuiBadge-badge": {
                color: purple[700], // APlica para letras, numeros e iconos
                bgcolor: "lightsalmon",
                // fontFamily: "fantasy",
                // fontSize: 20,
                // height: 30,
                // width: 30,
                // Ajustar posición via margins
                marginRight: -1,
                marginTop: 1.5,
              },
            },
          },
        }}
        sx={
          {
            //   "& .MuiBadge-badge": {
            //     color: "pink",
            //   },
          }
        }
      >
        {/* <Mail /> */}
        <Avatar />
      </Badge>
      {/* <Button onClick={() => setShow((show) => !show)}>Toggle show</Button> */}
    </Grid>
  );
};
