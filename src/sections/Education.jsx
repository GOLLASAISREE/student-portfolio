import React from 'react';
import { Container, Grid, Paper, Typography, Box, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { School, CheckCircle, Book } from '@mui/icons-material';
import { education } from '../data/education';
import SectionHeader from '../components/UI/SectionHeader';

const Education = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title="Education" 
          subtitle="My learning journey"
          align="center"
        />
        
        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} lg={6} key={edu.id}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <School 
                    color="primary" 
                    sx={{ 
                      fontSize: 40, 
                      mr: 2,
                      flexShrink: 0
                    }} 
                  />
                  <Box>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="600">
                      {edu.degree}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {edu.institution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {edu.location} • {edu.period}
                    </Typography>
                    {edu.gpa && (
                      <Chip 
                        label={`GPA: ${edu.gpa}`} 
                        color="primary" 
                        variant="outlined"
                        size="small"
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Box>
                </Box>

                <Typography variant="body1" paragraph color="text.secondary">
                  {edu.description}
                </Typography>

                {/* Courses */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" component="h4" gutterBottom fontWeight="600" sx={{ fontSize: '1.1rem' }}>
                    <Book sx={{ fontSize: 20, mr: 1, verticalAlign: 'middle' }} />
                    Relevant Courses
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {edu.courses.map((course, idx) => (
                      <Chip
                        key={idx}
                        label={course}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>

                {/* Achievements */}
                <Box>
                  <Typography variant="h6" component="h4" gutterBottom fontWeight="600" sx={{ fontSize: '1.1rem' }}>
                    <CheckCircle sx={{ fontSize: 20, mr: 1, verticalAlign: 'middle' }} />
                    Achievements
                  </Typography>
                  <List dense sx={{ py: 0 }}>
                    {edu.achievements.map((achievement, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle color="primary" sx={{ fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText primary={achievement} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;