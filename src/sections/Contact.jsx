import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  Paper,
  Link,
  IconButton
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter
} from '@mui/icons-material';
import { personalInfo } from '../data/personalInfo';
import SectionHeader from '../components/UI/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setSubmitStatus('sending');
      
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
      }, 2000);
    }
  };

  const socialIcons = [
    { icon: <GitHub />, url: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: <LinkedIn />, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: <Twitter />, url: personalInfo.socialLinks.twitter, label: 'Twitter' }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }} id="contact">
      <Container maxWidth="lg">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's work together"
          align="center"
        />
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Contact Information
              </Typography>
              
              <Typography variant="body1" paragraph color="text.secondary">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and design.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Email color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Link href={`mailto:${personalInfo.email}`} color="inherit">
                      {personalInfo.email}
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Phone color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Link href={`tel:${personalInfo.phone}`} color="inherit">
                      {personalInfo.phone}
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOn color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1">
                      {personalInfo.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Social Links */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {socialIcons.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      color="primary"
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Send Message
              </Typography>
              
              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you for your message! I'll get back to you soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  margin="normal"
                  required
                />
                
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  margin="normal"
                  required
                />
                
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  margin="normal"
                  required
                />
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={submitStatus === 'sending'}
                  sx={{ mt: 3 }}
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;