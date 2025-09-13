import { ArrowOutward, Close, EmojiEvents, Menu } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { countries, topSoccerClubs } from "../../fixtures/data";
import { MainListSubheader } from "../DataDisplayComponents/ListComponent";

export const TemporaryDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerWidth = 250;
  return (
    <>
      <Paper>
        <IconButton
          onClick={() => setOpenDrawer((prevState) => !prevState)}
          title="Open drawer"
        >
          <Menu />
        </IconButton>
      </Paper>
      <Drawer
        anchor="left"
        variant="temporary"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        slotProps={{ backdrop: { sx: { bgcolor: "rgba(42, 40, 168, 0.5)" } } }}
      >
        <Box sx={{ width: drawerWidth }}>
          <MainListSubheader disableGutters sx={{ alignItems: "center" }}>
            MY LIST{" "}
            <IconButton
              onClick={() => setOpenDrawer(false)}
              sx={{
                position: "absolute",
                right: 2,
                top: 2,
                "&:hover": { bgcolor: "darkmagenta" },
              }}
            >
              <Close sx={{ fill: "white" }} />
            </IconButton>
          </MainListSubheader>
          <List
            disablePadding
            dense // Hace más pequeño de cada item de la lista
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
                          <ArrowOutward />
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
          </List>
        </Box>
      </Drawer>
    </>
  );
};
