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

const Logo = styled('img')(({ theme }) => ({
  height: 50,
  marginRight: 16,
  [theme.breakpoints.down('sm')]: {
    height: 36,
    marginRight: 8,
  },
}));

const Header = ({ value, onChange }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, py: { xs: 1, sm: 0 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '100%', sm: 'auto' }, mb: { xs: 1, sm: 0 } }}>
          <Logo src={process.env.PUBLIC_URL + '/logo.png'} alt="Portfolio Logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
            My Portfolio
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <StyledTabs
            value={value}
            onChange={onChange}
            variant="scrollable"
            scrollButtons="auto"
            centered={false}
            sx={{ minHeight: 36 }}
          >
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