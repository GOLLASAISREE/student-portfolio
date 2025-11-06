import React from 'react';
import { CssBaseline, Container, Box, Typography, Grid, Chip, Divider } from '@mui/material';
import { profile } from './data/profile';
import { skills } from './data/skills';
import { projects } from './data/projects';
import Experience from './sections/Experience';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {profile.fullName}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {profile.displayName} • {profile.role} — {profile.degree}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {profile.bio}
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Skills</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.frontend.map(s => (
                  <Chip key={s.name} label={`${s.name} (${s.level})`} variant="outlined" />
                ))}
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>Tools</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.tools.map(t => (
                  <Chip key={t.name} label={`${t.name} (${t.level})`} variant="outlined" />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Contact</Typography>
              <Typography>{profile.contact.email}</Typography>
              <Typography>
                <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> •{' '}
                <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a>
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2">{profile.footerNote}</Typography>
            </Grid>
          </Grid>

          <Experience />

          <Box sx={{ mt: 6, textAlign: 'center', py: 4 }}>
            <Typography variant="body2" color="text.secondary">
              {profile.copyright}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}