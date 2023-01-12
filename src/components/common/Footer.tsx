import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "black",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "solid 0.5px #f5f5f5",
        }}
      >
        <Typography color={"white"} textAlign={"center"}>
          Copyright 2023, Generics
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
