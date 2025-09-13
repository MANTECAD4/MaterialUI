import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { labels } from "../../fixtures/data";
import { useState, type ReactNode } from "react";
import { Description, Logout, Person, Settings } from "@mui/icons-material";

export const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isOpen = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  const longString =
    "My profileMy profileMy profileMy profileMy profileMy profileMyprofileMy profileMy profileMy profileMy profileMy profileMy profileMyprofileMy profileMy profileMy profileMy profileMy profileMy profileMyprofile";
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
        <Tooltip title="Account settings" followCursor>
          <Avatar src="https://images.theconversation.com/files/651621/original/file-20250226-32-jxjhmy.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5991%2C3997&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
        </Tooltip>
      </IconButton>
      <Menu
        open={isOpen}
        // Elemento del cual va a brotar el menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Punto desde el cual brota elmenu con respecto al elemento anchor
        transformOrigin={{ vertical: "top", horizontal: "right" }} // Punto dentro menu desde el cual brota
        onClose={handleClose} // Al hacer click fuera del menu
        slots={{ transition: Zoom }} // Cambio de transicion
        // Estilizado acccedianedo a los sub componentes
        slotProps={{
          // Fondo del menú
          paper: {
            variant: "outlined",
            sx: { bgcolor: "whitesomke", borderColor: "lightsteelblue" },
          },
          // list: { disablePadding: true },
          // Fondo backdrop (opcional)
          backdrop: {
            sx: { bgcolor: "rgba(120, 30, 30, 0.3)" },
            // transitionDuration: 1000,
            // slots: { transition: Zoom },
          },
        }}
        sx={{
          // Esilizado iconos
          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
          // Apuntar a varios clases a la vez
          "& .MuiMenuItem-root, .MuiTypography-root": {
            fontSize: 13,
            fontFamily: "cursive",
            // py: 0,
            // px: 2,
          },
          "& .MuiMenuItem-root.Mui-selected": { fontWeight: "bold" },
          "& .MuiDivider-root": {
            borderColor: "lightsteelblue",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          {/* Uso de typography para truncar texto muy largo */}
          <Typography
          //   noWrap title={longString}
          // whiteSpace={"normal"}
          >
            My profile
            {/* {longString} */}
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setAnchorEl(null)} selected>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          Historial
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
