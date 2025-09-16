import React, { useState } from 'react';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

// Sample images data (replace with your actual images)
const galleryData = {
  0: [ // Web Development
    { url: '/images/web1.jpg', title: 'E-commerce Platform', description: 'Full-stack web application' },
    { url: '/images/web2.jpg', title: 'Social Media Dashboard', description: 'Interactive dashboard' },
    { url: '/images/web3.jpg', title: 'Portfolio Website', description: 'Responsive design' },
  ],
  1: [ // Mobile Apps
    { url: '/images/mobile1.jpg', title: 'Fitness App', description: 'iOS and Android app' },
    { url: '/images/mobile2.jpg', title: 'Food Delivery', description: 'Cross-platform application' },
    { url: '/images/mobile3.jpg', title: 'Travel Guide', description: 'Location-based services' },
  ],
  2: [ // UI/UX Design
    { url: '/images/design1.jpg', title: 'App Redesign', description: 'Modern UI refresh' },
    { url: '/images/design2.jpg', title: 'Brand Identity', description: 'Logo and guidelines' },
    { url: '/images/design3.jpg', title: 'User Interface Kit', description: 'Component library' },
  ],
  3: [ // Photography
    { url: '/images/photo1.jpg', title: 'Urban Landscapes', description: 'City photography' },
    { url: '/images/photo2.jpg', title: 'Nature Series', description: 'Environmental shots' },
    { url: '/images/photo3.jpg', title: 'Portrait Collection', description: 'Studio portraits' },
  ],
  4: [ // About Me
    { url: '/images/about1.jpg', title: 'Work Space', description: 'My creative environment' },
    { url: '/images/about2.jpg', title: 'Team Projects', description: 'Collaboration highlights' },
    { url: '/images/about3.jpg', title: 'Awards', description: 'Professional achievements' },
  ],
};

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header value={selectedTab} onChange={handleTabChange} />
        <ImageGallery images={galleryData[selectedTab]} category={selectedTab} />
      </div>
    </ThemeProvider>
  );
}

export default App;
