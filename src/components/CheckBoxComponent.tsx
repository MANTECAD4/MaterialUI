import { Checkbox } from "@mui/material";
import { useState } from "react";

export const CheckBoxComponent = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      Checkbox
      <Checkbox
        checked={checked}
        onChange={({ target }) => setChecked(target.checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
};
