import React from "react";
import "./Header.css";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
} from "@material-ui/core";

export default function CardGrid() {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <Container className="cardGrid">
      <Grid container spacing={3}>
        {numbers.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className="card">
              <CardMedia
                className="cardMediaStyle"
                Image='../Assets/images/cardImage.jpg'
                title="Image title"
              />
              <CardContent className="cardContent">
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions className="IconStyles">
                <div>
                <Button size="small" color="primary">
                  View
                </Button>
                </div>
                <div >
                  <IconButton aria-label="Edit">
                    <EditRoundedIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="Delete">
                    <DeleteRoundedIcon fontSize="small" />
                  </IconButton>
                </div>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
