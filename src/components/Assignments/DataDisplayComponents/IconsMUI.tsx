import SvgIcon from "@mui/icons-material/AddReactionTwoTone";
import AddReactionTwoToneIcon from "@mui/icons-material/AddReactionTwoTone";
import { purple } from "@mui/material/colors";
import { MyIcon } from "./icons/icons";
export const IconsMUI = () => {
  return (
    <>
      {/* MUI Icons */}
      <AddReactionTwoToneIcon
        // Los estilos se aplican directamente
        sx={{ fill: purple["900"], fontSize: 100, "&:hover": { fill: "red" } }}
      />
      <MyIcon color="secondary" sx={{ fontSize: 100 }} />
    </>
  );
};
