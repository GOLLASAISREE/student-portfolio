import React from 'react';
import { Container, Grid, Typography, Box, LinearProgress, Paper } from '@mui/material';
import { skills } from '../data/skills';
import SectionHeader from '../components/UI/SectionHeader';

const SkillBar = ({ name, level }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1" fontWeight="500">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {level}%
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={level} 
        sx={{ 
          height: 8, 
          borderRadius: 4,
          backgroundColor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            background: 'linear-gradient(45deg, #2563eb, #7c3aed)'
          }
        }}
      />
    </Box>
  );
};

const Skills = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title="Skills & Technologies" 
          subtitle="What I bring to the table"
          align="center"
        />
        
        <Grid container spacing={4}>
          {skills.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom 
                  fontWeight="600"
                  sx={{ 
                    color: 'primary.main',
                    textAlign: 'center',
                    mb: 3
                  }}
                >
                  {category.category}
                </Typography>
                
                {category.items.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;