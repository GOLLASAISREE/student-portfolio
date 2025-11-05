import React from 'react';
import { Container, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, Paper, Typography, Box, Chip } from '@mui/lab';
import { Work } from '@mui/icons-material';
import { experience } from '../data/experience';
import SectionHeader from '../components/UI/SectionHeader';

const Experience = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title="Work Experience" 
          subtitle="My professional journey"
          align="center"
        />
        
        <Timeline position="alternate">
          {experience.map((job, index) => (
            <TimelineItem key={job.id}>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <Work />
                </TimelineDot>
                {index < experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              
              <TimelineContent sx={{ py: 3 }}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4, 
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="600">
                    {job.title}
                  </Typography>
                  
                  <Typography variant="subtitle1" color="primary" gutterBottom fontWeight="500">
                    {job.company} • {job.location}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontStyle: 'italic', mb: 2 }}>
                    {job.period}
                  </Typography>
                  
                  <Typography variant="body1" paragraph>
                    {job.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" component="h4" gutterBottom fontWeight="600" sx={{ fontSize: '1rem' }}>
                      Key Achievements:
                    </Typography>
                    <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            {achievement}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {job.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;