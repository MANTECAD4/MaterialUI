import {
  Close,
  DeleteForever,
  Edit,
  EditAttributes,
  Public,
  Save,
} from "@mui/icons-material";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";

export const ButtonGroupComponent = () => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        // orientation="vertical"
        size="large"
        sx={{
          // Color de borde para las variantes text y contained
          "& .MuiButtonGroup-middleButton": {
            borderColor: pink[200],
          },
          "& > button": {
            bgcolor: "pink",
            fontFamily: "fantasy",
            // borderColor: "black", // color del borde para la variante outlined
            "&:hover": { bgcolor: pink[400] },
            "&.Mui-disabled": {
              //   bgcolor: "GrayText",
            },
          },
        }}
      >
        <Button disabled endIcon={<Public />}>
          Publish
        </Button>
        <Button endIcon={<Close />}>CLose</Button>

        <Button endIcon={<Save />}>save</Button>
        <ButtonGroup
          size="small"
          orientation="vertical"
          sx={{
            "& > button": {
              width: 35,
              height: 35,
            },
          }}
        >
          <Button
            sx={{
              borderRadius: 0,
              bgcolor: "red",
              color: "white",
              borderColor: "red",
            }}
          >
            <DeleteForever fontSize="small" />
          </Button>
          <Button sx={{ borderRadius: 0, bgcolor: "orange", color: "white" }}>
            <Edit fontSize="small" />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </>
  );
};
