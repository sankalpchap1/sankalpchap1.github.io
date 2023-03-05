import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '16px' }}>
      <CardMedia
        sx={{ height: 250 }}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default WorkCard;
