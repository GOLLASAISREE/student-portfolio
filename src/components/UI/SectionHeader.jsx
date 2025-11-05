import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const SectionHeader = ({ title, subtitle, align = 'left' }) => {
  return (
    <Box sx={{ textAlign: align, mb: 6 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          mb: 2
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
      )}
      <Divider sx={{ width: align === 'center' ? '80px' : '60px', height: '4px', bgcolor: 'primary.main', mx: align === 'center' ? 'auto' : '0' }} />
    </Box>
  );
};

export default SectionHeader;