import React, { useState,useEffect } from "react";
import "./Header.css";

import { Container, Grid, Button } from "@material-ui/core";
import GridItem from "./CardItem";

export default function CardGrid() {
  const [loadData, setLoadData] = useState(new Date);
  const [cardList, setCardlist] = useState([
    {
      id: 1,
      name: {
        title: "Miss",
        first: "Teresa",
        last: "Patterson",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
      },
      location: {
        street: {
          number: 1746,
          name: "The Drive",
        },
      },
    },
    {
      id: 2,
      name: {
        title: "Mrs",
        first: "Abigail",
        last: "Jones",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      },
      location: {
        street: {
          number: 6541,
          name: "Maple Ave",
        },
      },
    },
  ]);


  useEffect(() => {
  fetch("https://api.randomuser.me/")
  .then((response) => {
    return response.json();
  }).then((responseData) => {
    setCardlist((cardList) => [...cardList,responseData.results[0]]);
  });
 
  },[loadData]);

  const cardListComponent = () => {
    return cardList.map((aName) => {
      return (
        <GridItem
          key={aName.id}
          authorName={
            aName.name.title + " " + aName.name.first + " " + aName.name.last
          }
          category={aName.location.street.number}
          blogTitle={aName.location.street.name}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addBlogMore = () => {
    setLoadData(new Date());
  };

  return (
    <Container className="cardGrid">
      <Grid item className="bottomMargin">
        <Button variant="contained" color="primary" onClick={addBlogMore}>
          Read More Blogs
        </Button>
      </Grid>
      <Grid container spacing={3}>
        {cardListComponent()}
      </Grid>
    </Container>
  );
}
