import React, { useState, useEffect } from "react";
import "./Header.css";

import { Container, Grid } from "@material-ui/core";
import GridItem from "./CardItem";

export default function CardGrid() {
  const cardList = [
    {
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
  ];

  // const [person, setPerson] = useState(null);

  // useEffect(async () => {
  //   const url = "https://api.randomuser.me/";
  //   const response = await fetch(url);
  //   const data = response.data.Json();
  //   const [item] = data.results;
  //   console.log("item", item);
  //   setPerson(item);
  // }, []);

  const cardListComponent = () => {
    return cardList.map((aName) => {
      return (
          <GridItem
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

  return (
    <Container className="cardGrid">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          {cardListComponent()}
        </Grid>
      </Grid>
    </Container>
  );
}
