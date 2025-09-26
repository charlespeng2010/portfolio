import React, { useState } from 'react';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import galleryDataRaw from './galleryData.json';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1890ff',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

// Prepend PUBLIC_URL to each image url
const galleryData = {};
Object.keys(galleryDataRaw).forEach(key => {
  galleryData[key] = galleryDataRaw[key].map(img => ({
    url: process.env.PUBLIC_URL + '/' + img.url.replace(/^\/+/, '')
  }));
});

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
      setModalOpen(false);
      setModalIndex(0);
  };

  const handleImageClick = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const handleClose = () => {
      setModalOpen(false);
      setModalIndex(0);
  };

  const handlePrev = () => {
    setModalIndex((prev) => (prev === 0 ? galleryData[selectedTab].length - 1 : prev - 1));
  };

  const handleNext = () => {
    setModalIndex((prev) => (prev === galleryData[selectedTab].length - 1 ? 0 : prev + 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header value={selectedTab} onChange={handleTabChange} />
        <ImageGallery
          images={galleryData[selectedTab]}
          category={selectedTab}
          onImageClick={handleImageClick}
        />
        <Dialog open={modalOpen} onClose={handleClose} maxWidth="md">
          <div style={{ position: 'relative', background: '#000' }}>
            <IconButton
              onClick={handlePrev}
              style={{ position: 'absolute', top: '50%', left: 10, zIndex: 2, color: '#fff', transform: 'translateY(-50%)' }}
              aria-label="Previous"
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>
            <img
              src={galleryData[selectedTab][modalIndex].url}
              alt="enlarged"
              style={{ display: 'block', maxWidth: '80vw', maxHeight: '80vh', margin: 'auto' }}
            />
            <IconButton
              onClick={handleNext}
              style={{ position: 'absolute', top: '50%', right: 10, zIndex: 2, color: '#fff', transform: 'translateY(-50%)' }}
              aria-label="Next"
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={handleClose}
              style={{ position: 'absolute', top: 10, right: 10, zIndex: 2, color: '#fff' }}
              aria-label="Close"
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default App;
