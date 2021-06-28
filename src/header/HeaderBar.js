import React from "react";

import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton,
  Dialog,
  
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import Hero from "./Hero";
import CardGrid from "./CardsGrid";
import CreateForm from "../Component/CreateForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HeaderBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <Button variant="contained" onClick={handleClickOpen}>Create New</Button>
        </Toolbar>
      </AppBar>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="appbar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" >
              Create Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
        <CreateForm />  
        </div>
       
      </Dialog>
      <Hero />
      <CardGrid/>
    </div>
  );
}
