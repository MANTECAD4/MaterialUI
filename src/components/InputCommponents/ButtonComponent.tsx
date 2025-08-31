import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";

export const ButtonComponent = () => {
  return (
    <>
      {/* Priority High */}
      <Button
        disabled
        sx={{
          bgcolor: "red",
          "&:hover": { bgcolor: "brown" },
          "&.Mui-disabled": { bgcolor: grey[500] },
        }}
        endIcon={<Visibility />}
        variant="contained"
      >
        PUBLISH
      </Button>
      <IconButton color="info">
        <Visibility />
      </IconButton>
    </>
  );
};
