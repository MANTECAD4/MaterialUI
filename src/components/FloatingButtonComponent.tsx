import { Add, NavigateNext } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const FloatingButtonComponent = () => {
  return (
    <>
      <Fab>
        <Add />
      </Fab>
      <Fab
        // disabled
        variant="extended"
        sx={{
          ml: 3,
          bgcolor: blue[200],
          "&:hover": { bgcolor: blue[400] },
          "&.Mui-disabled": { bgcolor: grey[600], color: "white" },
        }}
      >
        <NavigateNext />
        Navigate
      </Fab>
    </>
  );
};
