import React from 'react';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import { profile } from './data/profile';
import Experience from './sections/Experience';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {profile.fullName} — {profile.role}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {profile.bio}
          </Typography>
          <Experience />
        </Box>
      </Container>
    </>
  );
}