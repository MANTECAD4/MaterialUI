import { Box, TextareaAutosize } from "@mui/material";
import { useState } from "react";

export const TextAreaAutoSizeFunctionality = () => {
  const [text, setText] = useState("");
  return (
    <>
      {text}
      <Box
        sx={{
          "& > textarea": {
            borderColor: "secondary.main",
            "&:focus": {
              outlineColor: "green",
            },
          },
        }}
      >
        <TextareaAutosize
          aria-label="My Text area uwu"
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          maxRows={5}
          minRows={3}
          placeholder="My textAreaAutoSize"
          style={{}}
        />
      </Box>
    </>
  );
};
