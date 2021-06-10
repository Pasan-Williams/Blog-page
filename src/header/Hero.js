import React from "react";
import "../header/header.css";
import { Container, Grid ,Typography, Button } from "@material-ui/core";

export default function Hero() {
  return (
    <main>
      <div className="heroContent">
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
          >
            Read Our Latest Blog Post
          </Typography>
          <Typography
            variant="h5"
            align="center"
          >
            You can create your own articles here
          </Typography>
          <div className="heroButtons">
            <Grid container justify="center">
              <Grid item>
                <Button variant="contained" color="primary" className="mt-3">
                  Read More
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      ;
    </main>
  );
}
