import { Button, CircularProgress, LinearProgress } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useState } from "react";

export const ProgressComponent = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <LinearProgress
        // value={25}
        // valueBuffer={50}
        // variant="buffer"
        // color="warning"
        sx={{
          mb: 4,
          // Estilos variantes determinate e indeterminate
          // Para variant buffer mejor usar la prop color
          "&.MuiLinearProgress-root": {
            bgcolor: pink[100],
            width: 300,
            height: 10,
            borderRadius: 10,
            // "& .MuiLinearProgress-dashed": { bgcolor: "red" },
            "& .MuiLinearProgress-bar": {
              // animationDuration: "5s",
              bgcolor: pink[500],
            },
          },
        }}
      />

      <CircularProgress
        // value={50}
        // variant="determinate"
        thickness={10}
        // disableShrink
        sx={{ animationDuration: "5s", color: "red" }}
      />
      {/* Integracion con un boton */}
      {/* <Button onClick={() => setLoading(!loading)}>
        {loading ? (
          <>
            <CircularProgress color="inherit" size={25} sx={{ mr: 1 }} />
            {"Loading..."}
          </>
        ) : (
          "CLick me"
        )}
      </Button> */}
    </>
  );
};
