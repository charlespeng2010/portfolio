import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'scale(1.02)',
    transition: 'transform 0.2s ease-in-out',
  },
});

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const ImageGallery = ({ images, category }) => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <StyledCardMedia
              image={image.url}
              title={image.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {image.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {image.description}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;