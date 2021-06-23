import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import Hero from "./Hero";
import CardGrid from "./CardsGrid";
import { Title } from "@material-ui/icons";

export default function HeaderBar() {
  return (
    <div className="root">
      <AppBar className="headerFix">
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
          <Link to="/Createform"  style={{ textDecoration: 'none' }}>
            <Button variant="contained">Create New</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Hero />
      <CardGrid title="Auther Name" category="Travel" />
    </div>
  );
}
