import { Link } from "@mui/material";

export const LinkComponent = () => {
  return (
    <>
      <Link
        //   component={}
        // variant="h1"
        href=""
        target="_blank"
        underline="none"
        rel="noreferrer"
        sx={{ color: "red", textDecorationColor: "red" }}
      >
        Hola
      </Link>
    </>
  );
};
