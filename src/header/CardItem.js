import React from "react";
import "./Header.css";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
  Grid,
} from "@material-ui/core";

export default function CardItem(props) {
  return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className="card">
          <CardHeader
            avatar={<Avatar src={props.avatar} className="avatarSize" />}
            title={props.authorName}
            subheader={props.category}
          />
          {/* <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="100"
                className="cardMediaStyle"
                Image="../Assets/images/card-img.jpg"
                title="Image title"
              /> */}
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="h2">
              {props.blogTitle}
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
            <div>
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
  );
}
