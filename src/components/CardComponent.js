import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

export default function CardComponent() {
  const [cardArr, setCardArr] = useState(["BMW","AUDI","MERCEDES","ROLLS ROYCE","HYUNDAI","SUZUKI"]);

  function deleteCard(e) {
    e.preventDefault();
    const arr = ["BMW","AUDI","MERCEDES","ROLLS ROYCE","HYUNDAI","SUZUKI"];
    const startIndex = arr.indexOf(e.target.value);
    const deleteCount = 1;
    if (startIndex !== -1) {
      const removed = arr.splice(startIndex, deleteCount);
      console.log(removed);
    }
    setCardArr(arr)
  }

  return (
    <>
      {cardArr.map((d, i) => (
        <Grid item xs={6} md={4}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {d}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {d} are a widespread group, with over 6,000 cars,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="warning"
                onClick={deleteCard}
                value={d}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
