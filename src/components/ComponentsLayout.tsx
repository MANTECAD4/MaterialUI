import { Divider, Typography } from "@mui/material";
import type { ReactNode } from "react";
type PropTypes = {
  title: string;
  children: ReactNode;
};
export const ComponentsLayout = ({ title, children }: PropTypes) => {
  return (
    <>
      <Divider textAlign="center" sx={{ my: 4 }}>
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
      </Divider>
      {children}
    </>
  );
};
