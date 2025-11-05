import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Blog from '../sections/Blog';

const BlogPage = () => {
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
          Blog & Articles
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          align="center" 
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Thoughts on web development, technology, and best practices
        </Typography>
        
        <Blog showAll={true} />
      </Container>
    </Box>
  );
};

export default BlogPage;