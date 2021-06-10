import React from "react";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import "../header/header.css";
import MenuIcon from "@material-ui/icons/Menu";
import Hero from "./Hero"

export default function HeaderBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            My Blog
          </Typography>
          <Button variant="contained">Create New</Button>
        </Toolbar>
      </AppBar>
      <Hero/>
    </div>
  );
}
