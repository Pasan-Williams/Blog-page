import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Paper,
  Radio,
} from "@material-ui/core";
import "./CreateForm.css";

export default function CreateForm() {
  return (
    <Container fluid>
      <Paper className="paperStyle">
        <Typography variant="h6" gutterBottom>
          Create New Blog Post
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField required id="firstName" label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="lastName" label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="blogName"
              name="blogName"
              label="Blog Name"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className="textStyle">Blog Category :</div>

          <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="Travel"
          />
          <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="Animals"
          />
          <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="Music"
          />
          <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="Sports"
          />
        </Grid>
        <Grid>
          <Grid>
            <TextField
              id="standard-textarea"
              label="Blog Description"
              rows={10}
              multiline
              fullWidth
            />
          </Grid>
        </Grid>
        <br></br>
        <Grid item xs={12}>
          <Link to="/"  style={{ textDecoration: 'none'}}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Container>
  );
}
