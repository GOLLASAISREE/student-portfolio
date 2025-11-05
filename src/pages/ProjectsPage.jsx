import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Projects from '../sections/Projects';

const ProjectsPage = () => {
  return (
    <Box sx={{ pt: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2
          }}
        >
          All Projects
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          align="center" 
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          A collection of my work and side projects
        </Typography>
        
        <Projects />
      </Container>
    </Box>
  );
};

export default ProjectsPage;