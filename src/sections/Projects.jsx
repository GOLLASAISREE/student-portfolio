import React from 'react';
import { Grid, Paper, Typography, Box, Chip } from '@mui/material';
import { projects } from '../data/projects';
import SectionHeader from '../components/UI/SectionHeader';

const Projects = () => (
  <Box sx={{ py: 6 }}>
    <SectionHeader title="Projects" subtitle="Selected work" align="center" />
    <Grid container spacing={3}>
      {projects.map((p) => (
        <Grid item xs={12} md={6} key={p.id}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {p.short}
            </Typography>
            <Typography variant="body2" paragraph>
              {p.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {p.technologies.map((t) => (
                <Chip key={t} label={t} size="small" variant="outlined" />
              ))}
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;