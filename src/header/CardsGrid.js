import React, { useState, useEffect } from "react";
import "./Header.css";

import { Container, Grid } from "@material-ui/core";
import GridItem from "./CardItem";

export default function CardGrid() {
  const cardList = {
    name: { 
      title: "Miss", 
      first: "Teresa", 
      last: "Patterson" 
    },
    picture:{
      medium:"https://randomuser.me/api/portraits/med/women/54.jpg"
    },
    location:{
      street:{
      number:1746,
      name:"The Drive"
      }
    },
  };
  // const [person, setPerson] = useState(null);

  // useEffect(async () => {
  //   const url = "https://api.randomuser.me/";
  //   const response = await fetch(url);
  //   const data = response.data.Json();
  //   const [item] = data.results;
  //   console.log("item", item);
  //   setPerson(item);
  // }, []);

  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <Container className="cardGrid">
      <Grid container spacing={3}>
        {numbers.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <GridItem
              authorName={cardList.name.title + ' ' + cardList.name.first + ' ' + cardList.name.last}
              category={cardList.location.street.number}
              blogTitle={cardList.location.street.name}
              avatar={cardList.picture.medium}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
