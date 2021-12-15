import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">KredFeed</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
