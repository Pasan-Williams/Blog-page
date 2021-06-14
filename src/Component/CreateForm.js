import React, { useState } from "react";
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
  IconButton,
  Row,
} from "@material-ui/core";
import "./CreateForm.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function CreateForm() {
  const initialInputState = { firstName: "", lastName: "", blogName: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { firstName, lastName, blogName } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  const handleInputSubmit = (e) => {
    // updateLeaderBoardArray(eachEntry);
    console.log("submit");
  };

  return (
    <Container fluid>
      <Paper className="paperStyle">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton>
                <ArrowBackIosIcon />
              </IconButton>
            </Link>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Create New Blog Post
            </Typography>
          </div>
        </div>
        <form onSubmit={handleInputSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                value={firstName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                value={lastName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="blogName"
                name="blogName"
                label="Blog Title"
                value={blogName}
                onChange={handleInputChange}
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleInputSubmit}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
