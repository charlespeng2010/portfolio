import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const StyledTab = styled(Tab)({
  '&.Mui-selected': {
    color: '#1890ff',
  },
});

const Logo = styled('img')({
  height: 50,
  marginRight: 16,
});

const Header = ({ value, onChange }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Logo src="/logo.png" alt="Portfolio Logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledTabs value={value} onChange={onChange} centered>
            <StyledTab label="Web Development" />
            <StyledTab label="Mobile Apps" />
            <StyledTab label="UI/UX Design" />
            <StyledTab label="Photography" />
            <StyledTab label="About Me" />
          </StyledTabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;