import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({ sections = ['home','projects','experience','contact'] }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, cursor: 'pointer' }} onClick={() => scrollTo('home')}>
          Golla Sai Sree
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {sections.map((s) => (
            <Button key={s} onClick={() => scrollTo(s)} color="inherit" sx={{ textTransform: 'none' }}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </Box>

        <IconButton color="inherit" sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;