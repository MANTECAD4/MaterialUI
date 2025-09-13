import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { countries, topSoccerClubs } from "../../fixtures/data";
import { Accessibility, Clear, EmojiEvents } from "@mui/icons-material";

export const MainListSubheader = styled(ListSubheader)(({ theme }) =>
  theme.unstable_sx({
    textAlign: "center",
    bgcolor: "black",
    color: "white",
    // mb: -1,
  })
);

export const ListComponent = () => {
  return (
    <Box sx={{ width: 450, bgcolor: "burlywood" }}>
      <MainListSubheader disableGutters>MY LIST</MainListSubheader>
      <List
        // subheader={
        //   <MainListSubheader disableGutters>MY LIST</MainListSubheader>
        // }
        disablePadding
        dense // Hace más pequeño de cada item de la lista
        sx={{
          // Estilos lista (opciones) y contenedor principal
          // bgcolor: "lightslategray",
          px: 4,
          // Estilos subheaders
          "& .MuiListSubheader-root": {
            bgcolor: "GrayText",
            color: "white",
            fontSize: 20,
            fontFamily: "verdana",
            textAlign: "center",
          },
          // Estilos contenedor items  de lista
          "& .MuiListItem-root": {
            bgcolor: "ghostwhite",
            // px: 2,
            py: 0.5,
          },
          // Estilos contenedor tipo boton con prop selected=true
          "& .Mui-selected": {
            bgcolor: "red",
            opacity: 1,
          },
          // personalización efecto rippple (ondas al dar click en un btn)
          "& .MuiTouchRipple-ripple": {
            color: "red",
          },
          // Estilos dvisor entre items
          "& .MuiListItem-divider": {
            borderWidth: 4,
          },
          // Estilos texto primario items de lista
          "& .MuiListItemText-primary": {
            fontSize: 15,
            fontFamily: "verdana",
            color: "goldenrod",
          },
          // Estilos texto secundario items de lista
          "& .MuiListItemText-secondary": {
            fontFamily: "verdana",
            color: "burlywood",
          },
          // Avatares
          "& .MuiAvatar-root": {
            width: 50,
            height: 50,
            bgcolor: "chocolate",
            "& .MuiSvgIcon-root": {
              fill: "gold",
              fontSize: 35,
            },
          },
          // Item Icons
          "& .MuiListItemIcon-root": {
            ml: 2,
            // Icono
            "& .MuiSvgIcon-root": {
              fill: "orangered",
              fontSize: 30,
            },
          },
          // Estilo boton secondaryAction
          "& .MuiIconButton-root": {
            bgcolor: "darkolivegreen",
            // p: 1.5,
            "& .MuiSvgIcon-root": {
              fill: "navajowhite",
            },
          },
          "& .MuiIconButton-root:hover": {
            bgcolor: "wheat",
            // p: 1.5,
            "& .MuiSvgIcon-root": {
              fill: "red",
            },
          },
        }}
      >
        {countries.map((country) => {
          const clubs = topSoccerClubs.filter(
            (club) => club.country === country
          );
          return (
            <>
              <ListSubheader>{country}</ListSubheader>
              {clubs.map((club) => (
                <ListItem
                  // disablePadding
                  divider
                  key={club.label}
                  secondaryAction={
                    <IconButton>
                      <Clear />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <EmojiEvents />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemButton>
                    <ListItemText
                      primary={`${club.label}`}
                      secondary={`${club.championsNum} trophies won.`}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </>
          );
        })}
        <ListSubheader>LIST ITEM ICON SECTION</ListSubheader>
        {countries.map((country) => (
          <ListItem>
            <ListItemIcon>
              <Accessibility />
            </ListItemIcon>
            <ListItemText primary={country} secondary="Some random stuff" />
          </ListItem>
        ))}
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Accessibility />
          </ListItemIcon>
          <ListItemText
            primary={"PORTUGAL"}
            // secondary="Some random stuff"
          />
        </ListItem>
        <ListItemButton
          selected
          // disableGutters // Elimina el padding a los lados
          // disablePadding
        >
          <ListItemText
            inset // permite alinear el texto con los List item /list item Button que SI tienen Icon
            primary={"PORTUGAL"}
            // secondary="Some random stuff"
          />
        </ListItemButton>
      </List>
    </Box>
  );
};
