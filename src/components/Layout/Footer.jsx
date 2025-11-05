import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import { personalInfo } from '../../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString();

  const socialLinks = [
    { icon: <GitHub />, url: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: <LinkedIn />, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: <Twitter />, url: personalInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: <Email />, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '#contact' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}
        >
          {/* Copyright and Info */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              {personalInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Last updated: {lastUpdated}
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                color="text.secondary"
                underline="hover"
                sx={{ cursor: 'pointer' }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                color="primary"
                size="small"
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Bottom Text */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'block',
            textAlign: 'center',
            mt: 3,
            pt: 2,
            borderTop: 1,
            borderColor: 'divider'
          }}
        >
          Built with React & Material-UI • Deployed with Vercel
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;