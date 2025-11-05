import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { ChevronLeft, ChevronRight, FormatQuote } from '@mui/icons-material';
import { testimonials } from '../data/testimonials';
import SectionHeader from '../components/UI/SectionHeader';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <Paper 
      elevation={isActive ? 8 : 2} 
      sx={{ 
        p: 4,
        height: '100%',
        position: 'relative',
        transition: 'all 0.3s ease',
        transform: isActive ? 'scale(1.02)' : 'scale(0.98)',
        opacity: isActive ? 1 : 0.7,
        border: isActive ? 2 : 0,
        borderColor: 'primary.main'
      }}
    >
      <FormatQuote 
        sx={{ 
          fontSize: 48, 
          color: 'primary.light', 
          opacity: 0.3,
          position: 'absolute',
          top: 16,
          right: 16
        }} 
      />
      
      <Rating 
        value={testimonial.rating} 
        readOnly 
        sx={{ mb: 2 }}
      />
      
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          fontStyle: 'italic',
          lineHeight: 1.6,
          mb: 3
        }}
      >
        "{testimonial.text}"
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
        <Avatar 
          src={testimonial.image} 
          alt={testimonial.name}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="h6" component="h4" fontWeight="600">
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.role} at {testimonial.company}
          </Typography>
          <Typography variant="caption" color="primary" sx={{ fontStyle: 'italic' }}>
            {testimonial.project}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = isMobile 
    ? [testimonials[activeIndex]]
    : testimonials.slice(activeIndex, activeIndex + 2).concat(
        testimonials.slice(0, Math.max(0, activeIndex + 2 - testimonials.length))
      );

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title="Testimonials" 
          subtitle="What colleagues and clients say"
          align="center"
        />

        {/* Navigation Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, gap: 2 }}>
          <IconButton 
            onClick={handlePrev}
            color="primary"
            size="large"
          >
            <ChevronLeft />
          </IconButton>
          
          <Typography variant="body2" color="text.secondary">
            {activeIndex + 1} / {testimonials.length}
          </Typography>
          
          <IconButton 
            onClick={handleNext}
            color="primary"
            size="large"
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={3} justifyContent="center">
          {visibleTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <TestimonialCard 
                testimonial={testimonial}
                isActive={isMobile || index === 0}
              />
            </Grid>
          ))}
        </Grid>

        {/* Dots Indicator */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: activeIndex === index ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: activeIndex === index ? 'primary.main' : 'grey.600'
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;