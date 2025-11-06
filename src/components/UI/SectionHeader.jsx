import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionHeader = ({ title, subtitle, align = 'left' }) => (
  <Box sx={{ mb: 4, textAlign: align }}>
    <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="subtitle1" color="text.secondary">
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default SectionHeader;