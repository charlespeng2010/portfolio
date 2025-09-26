import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'scale(1.02)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
  },
});

const StyledCardMedia = styled(CardMedia)({
  width: '100%',
    height: 240,
    objectFit: 'cover'
});

const ImageGallery = ({ images, onImageClick }) => (
  <Grid container spacing={2} sx={{ p: 2 }}>
    {images.map((image, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <StyledCard onClick={() => onImageClick(index)}>
          <StyledCardMedia
            component="img"
            src={image.url}
            alt={`Image ${index + 1}`}
          />
        </StyledCard>
      </Grid>
    ))}
  </Grid>
);

export default ImageGallery;