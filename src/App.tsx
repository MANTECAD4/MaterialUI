import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Backspace,
  Cancel,
  DeleteForever,
  EmojiEvents,
} from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";
import { chipClasses, IconButton, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const topSoccerClubs = [
  "REAL MADRID",
  "MILAN",
  "BARCELONA",
  "LIVERPOOL",
  "BAYERN",
  "CHELSEA",
  "AJAX",
  "JUVENTUS",
];

const MyPaper = styled(Paper)({
  backgroundColor: "blue",
});

export const App = () => {
  return (
    <>
      <Autocomplete
        disablePortal
        options={topSoccerClubs}
        multiple
        slotProps={{
          chip: {
            deleteIcon: <DeleteForever />,
            sx: {
              [`& .${chipClasses.label}`]: {
                fontFamily: "Monsieur La Doulaise",
                fontStyle: "italic",
                fontWeight: 900,
              },
              bgcolor: grey[500],
            },
          },
          paper: {
            sx: {
              bgcolor: blue[100],
              fontFamily: "Verdana",
              fontWeight: 900,
            },
          },
        }}
        sx={{
          width: 300,
        }}
        renderInput={(params) => (
          <TextField {...params} label="Top Winner Clubs" />
        )}
        popupIcon={<EmojiEvents />}
        // clearIcon={<Backspace />}
      />
    </>
  );
};
