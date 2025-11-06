import React from 'react';
import { Box, Container, Avatar, Typography, Button, Stack } from '@mui/material';
import { profile } from '../data/profile';

const Home = () => {
  const initials = (profile.fullName || '').split(' ').map(n => n[0]).slice(0,2).join('');
  return (
    <Box id="home" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 3, bgcolor: 'primary.main', fontSize: 36 }}>
          {initials}
        </Avatar>
        <Typography variant="h3" gutterBottom>{profile.fullName}</Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {profile.displayName} • {profile.role}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720, mx: 'auto', mb: 3 }}>
          {profile.bio}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Contact
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;