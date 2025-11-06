import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { profile } from '../data/profile';

const Footer = () => (
  <Box component="footer" sx={{ py: 4, textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary">
      {profile.contact.email} •{' '}
      <Link href={profile.contact.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </Link>{' '}
      •{' '}
      <Link href={profile.contact.github} target="_blank" rel="noreferrer">
        GitHub
      </Link>
    </Typography>
    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
      {profile.copyright}
    </Typography>
  </Box>
);

export default Footer;