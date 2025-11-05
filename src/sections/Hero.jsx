import React from 'react';
import { Container, Typography, Button, Box, Grid, Avatar } from '@mui/material';
import { Download, Email } from '@mui/icons-material';
import { personalInfo } from '../data/personalInfo';

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              {personalInfo.name}
            </Typography>
            
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 400,
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
                opacity: 0.9
              }}
            >
              {personalInfo.role}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: '600px',
                opacity: 0.8,
                lineHeight: 1.6
              }}
            >
              {personalInfo.tagline}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                href={personalInfo.resumeUrl}
                download
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                Download CV
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<Email />}
                href="#contact"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src="/images/profile.jpg"
              alt={personalInfo.name}
              sx={{
                width: { xs: 200, md: 280 },
                height: { xs: 200, md: 280 },
                border: '4px solid white',
                boxShadow: 8
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;