import { EmojiEmotions, RemoveCircleOutline } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { useState } from "react";

export const ChipComponent = () => {
  const [chips, setChips] = useState<string[]>([
    "Chip 1" /*  "Chip 2", "Chip 3" */,
  ]);
  return (
    <>
      {chips.map((chip) => (
        <Chip
          // onClick={() => console.log("Clicked")}
          //   avatar={
          //     <Avatar>
          //       <EmojiEmotions />
          //     </Avatar>
          //   }
          key={chip}
          //   clickable
          icon={<EmojiEmotions />}
          deleteIcon={<RemoveCircleOutline />}
          color="info"
          variant="outlined"
          label={chip}
          aria-label="My Chip"
          onDelete={() =>
            setChips((prevChips) => prevChips.filter((c) => c !== chip))
          }
          sx={{
            // Estilos chip (forma)
            bgcolor: "lightcoral",
            borderColor: "brown",
            width: 200,
            height: 60,
            borderRadius: 10,
            //Estilos texto
            color: "brown",
            fontSize: 20,
            fontFamily: "cursive",
            // Estilos icono (Se pueden aplicar directamente al elemento enviado a la prop icon)
            "& .MuiChip-icon": {
              fill: "pink",
              fontSize: 30,
              ml: -3,
            },
            // Estilos icono delete
            "& .MuiChip-deleteIcon": {
              fill: "red",
              fontSize: 30,
            },
          }}
        />
      ))}
    </>
  );
};
