import React, { useState } from "react";
import "./Header.css";

import { Container, Grid, Button } from "@material-ui/core";
import GridItem from "./CardItem";

export default function CardGrid() {
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
    const newCard = {
      id: 3,
      name: {
        title: "Mr",
        first: "Lucas",
        last: "Freeman",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
      },
      location: {
        street: {
          number: 9494,
          name: "North Street",
        },
      },
    };
    setCardlist ([...cardList, newCard]);
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
