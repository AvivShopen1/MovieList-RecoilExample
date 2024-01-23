import {
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Movie } from "../model/Movie";

type Props = Partial<Movie> & {
  skeleton?: boolean;
};

const MovieComponent = ({ title, genre, skeleton }: Props) => {
  return skeleton ? (
    <Skeleton variant="rectangular" width={350} height={150} />
  ) : (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Stack flexWrap="wrap" direction="row" spacing={3}>
          <Stack direction="column">
            <Typography color="text.secondary">Genre</Typography>
            <Typography>{genre?.join(", ")}</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MovieComponent;
