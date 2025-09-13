import {
  ArrowBackIosNew,
  ArrowOutward,
  Close,
  EmojiEvents,
  Menu,
} from "@mui/icons-material";
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
import { countries, topSoccerClubs } from "../../../fixtures/data";
import { MainListSubheader } from "../../DataDisplayComponents/ListComponent";
export const PersistentDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerWidth = 250;
  return (
    <>
      <Paper
        sx={{
          ml: openDrawer ? `${drawerWidth + 15}px` : "0px",
          transition: "margin 0.25s ease",
        }}
      >
        <IconButton
          onClick={() => setOpenDrawer((prevState) => !prevState)}
          title="Open drawer"
        >
          <Menu />
        </IconButton>
      </Paper>
      <Drawer
        //   keepMounted
        anchor="left"
        variant="persistent"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
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
              <ArrowBackIosNew sx={{ fill: "white" }} />
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
