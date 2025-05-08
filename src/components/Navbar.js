import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#282c34" }}>
      <Toolbar>
        <Typography variant="h6" component="div" style={{ color: "white" }}>
          Personal Coding Assistant
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;