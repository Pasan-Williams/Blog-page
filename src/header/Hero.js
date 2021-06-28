import React from "react";
import "./Header.css";
import { Container, Grid ,Typography, Button } from "@material-ui/core";
// import CardItem from "./CardItem";

export default function Hero() {

  return (
    <main position="static">
      <div className="heroContent">
        <Container >
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            className="heroTitle"
          >
            Read Our Latest Blog Post
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className="heroSubTitle"
           
          >
            You can create your own articles here
          </Typography>
          <div className="heroButtons">
            <Grid container justify="center">
              <Grid item>
                {/* <Button variant="contained" color="primary" onClick={changeState}>
                  Read More Blogs
                </Button> */}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  );
}
