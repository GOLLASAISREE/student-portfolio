import React, { useState } from 'react';
import { Container, Grid, Box, Chip, Typography } from '@mui/material';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from '../components/UI/ProjectCard';
import SectionHeader from '../components/UI/SectionHeader';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Some of my recent work"
          align="center"
        />

        {/* Category Filter */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h6" gutterBottom color="text.secondary">
            Filter by category:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            {projectCategories.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                color={selectedCategory === category ? 'primary' : 'default'}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                onClick={() => setSelectedCategory(category)}
                sx={{ mb: 1 }}
              />
            ))}
          </Box>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary" 
            sx={{ mt: 4 }}
          >
            No projects found in this category.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Projects;