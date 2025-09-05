import { Image, ImportContacts } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export const AvatarComponent = () => {
  const [value, setValue] = useState(30);
  return (
    <>
      <AvatarGroup variant="circular" spacing={10}>
        <Avatar
          alt={"Cristiano Ronaldo 7"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2a5lCiNewy483bmtd7cJU1Vynv_h6hyfNGA&s"
        />
        <Avatar>
          <ImportContacts />
        </Avatar>
        <Avatar>DM</Avatar>
        <Avatar />
      </AvatarGroup>
      <AvatarGroup spacing={1} variant="rounded">
        <Avatar
          alt={"Cristiano Ronaldo 7"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2a5lCiNewy483bmtd7cJU1Vynv_h6hyfNGA&s"
        />
        <Avatar>
          <ImportContacts />
        </Avatar>
        <Avatar>DM</Avatar>
        <Avatar />
      </AvatarGroup>
      <AvatarGroup
        // max={4}
        spacing={value}
        // variant="square"
        sx={{
          "& .MuiAvatar-root": {
            borderColor: "green",
            bgcolor: "blueviolet",
            // Tamaño
            height: 55,
            width: 55,
            // Estilos cuando muestran texto
            fontSize: 40, // Para
            "& .MuiSvgIcon-root": { fill: "red", fontSize: 40 },
          },
        }}
        // Estilos para variantes con icono
      >
        <Avatar
          alt={"Cristiano Ronaldo 7"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2a5lCiNewy483bmtd7cJU1Vynv_h6hyfNGA&s"
        />
        <Avatar>
          <ImportContacts />
        </Avatar>
        <Avatar>DM</Avatar>
        <Avatar />
      </AvatarGroup>
      <Button onClick={() => setValue(30)}>30</Button>
      <Button onClick={() => setValue(-30)}>-30</Button>
    </>
  );
};
