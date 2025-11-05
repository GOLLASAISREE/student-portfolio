import React from 'react';
import { Container, Grid, Typography, Box, Paper, Avatar, Chip } from '@mui/material';
import { LocationOn, Schedule, Language } from '@mui/icons-material';
import { personalInfo } from '../data/personalInfo';
import SectionHeader from '../components/UI/SectionHeader';

const About = () => {
  const quickFacts = [
    {
      icon: <LocationOn color="primary" />,
      label: 'Location',
      value: personalInfo.location
    },
    {
      icon: <Schedule color="primary" />,
      label: 'Availability',
      value: personalInfo.availability
    },
    {
      icon: <Language color="primary" />,
      label: 'Languages',
      value: personalInfo.languages.join(', ')
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title="About Me" 
          subtitle="Get to know me better"
          align="center"
        />
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src="/images/profile.jpg"
              alt={personalInfo.name}
              sx={{
                width: 280,
                height: 280,
                border: '4px solid',
                borderColor: 'primary.main',
                boxShadow: 4
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Typography variant="h5" component="h3" gutterBottom fontWeight="600">
              Hello! I'm {personalInfo.name.split(' ')[0]}
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              {personalInfo.bio}
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              I'm passionate about creating digital experiences that are both beautiful and functional. 
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities.
            </Typography>

            {/* Quick Facts */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {quickFacts.map((fact, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Paper 
                    elevation={2} 
                    sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 1 }}>
                      {fact.icon}
                    </Box>
                    <Typography variant="h6" component="h4" gutterBottom fontWeight="600">
                      {fact.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {fact.value}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Interests */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Interests
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['Open Source', 'UI/UX Design', 'Machine Learning', 'Photography', 'Hiking', 'Reading'].map((interest) => (
                  <Chip
                    key={interest}
                    label={interest}
                    variant="outlined"
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;