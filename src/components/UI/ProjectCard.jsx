import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  CardActions
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const ProjectCard = ({ project }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image || "/images/projects/placeholder.jpg"}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h3" fontWeight="600">
          {project.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          ))}
        </Box>

        {project.metrics && (
          <Typography variant="caption" color="primary" sx={{ fontStyle: 'italic' }}>
            {project.metrics}
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        {project.githubLink && (
          <Button
            size="small"
            startIcon={<GitHub />}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
        )}
        {project.demoLink && (
          <Button
            size="small"
            startIcon={<Launch />}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;