import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { Launch, MilitaryTech, EmojiEvents, WorkspacePremium } from '@mui/icons-material';
import { achievements } from '../data/achievements';
import SectionHeader from '../components/UI/SectionHeader';

const AchievementCard = ({ achievement, onViewDetails }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Certification':
        return <WorkspacePremium color="primary" />;
      case 'Award':
        return <EmojiEvents color="secondary" />;
      case 'Recognition':
        return <MilitaryTech color="success" />;
      default:
        return <WorkspacePremium color="primary" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Certification':
        return 'primary';
      case 'Award':
        return 'secondary';
      case 'Recognition':
        return 'success';
      default:
        return 'primary';
    }
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
        <Box 
          sx={{ 
            width: 60,
            height: 60,
            borderRadius: 2,
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            flexShrink: 0
          }}
        >
          {getCategoryIcon(achievement.category)}
        </Box>
        
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h3" gutterBottom fontWeight="600">
            {achievement.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {achievement.issuer} • {achievement.date}
          </Typography>
        </Box>
      </Box>

      <Chip
        label={achievement.category}
        color={getCategoryColor(achievement.category)}
        variant="outlined"
        size="small"
        sx={{ mb: 2, alignSelf: 'flex-start' }}
      />

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
        {achievement.description}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button
          size="small"
          onClick={() => onViewDetails(achievement)}
          sx={{ textTransform: 'none' }}
        >
          View Details
        </Button>
        
        {(achievement.credentialUrl || achievement.projectUrl) && (
          <Button
            size="small"
            startIcon={<Launch />}
            href={achievement.credentialUrl || achievement.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none' }}
          >
            Verify
          </Button>
        )}
      </Box>
    </Paper>
  );
};

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (achievement) => {
    setSelectedAchievement(achievement);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedAchievement(null);
  };

  const categories = [...new Set(achievements.map(a => a.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title="Achievements & Certifications" 
          subtitle="Recognition and credentials"
          align="center"
        />

        {/* Category Filter */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Chip
              label="All"
              clickable
              color={selectedCategory === 'All' ? 'primary' : 'default'}
              variant={selectedCategory === 'All' ? 'filled' : 'outlined'}
              onClick={() => setSelectedCategory('All')}
              sx={{ mb: 1 }}
            />
            {categories.map((category) => (
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

        {/* Achievements Grid */}
        <Grid container spacing={3}>
          {filteredAchievements.map((achievement) => (
            <Grid item xs={12} sm={6} lg={4} key={achievement.id}>
              <AchievementCard 
                achievement={achievement} 
                onViewDetails={handleViewDetails}
              />
            </Grid>
          ))}
        </Grid>

        {/* Achievement Detail Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
        >
          {selectedAchievement && (
            <>
              <DialogTitle sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h5" component="h2" fontWeight="600">
                  {selectedAchievement.title}
                </Typography>
              </DialogTitle>
              
              <DialogContent sx={{ pt: 3 }}>
                <Typography variant="body1" paragraph>
                  <strong>Issuer:</strong> {selectedAchievement.issuer}
                </Typography>
                
                <Typography variant="body1" paragraph>
                  <strong>Date:</strong> {selectedAchievement.date}
                </Typography>
                
                <Typography variant="body1" paragraph>
                  <strong>Category:</strong> {selectedAchievement.category}
                </Typography>
                
                <Typography variant="body1">
                  {selectedAchievement.description}
                </Typography>
              </DialogContent>
              
              <DialogActions sx={{ borderTop: 1, borderColor: 'divider' }}>
                <Button onClick={handleCloseDialog}>Close</Button>
                {(selectedAchievement.credentialUrl || selectedAchievement.projectUrl) && (
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={selectedAchievement.credentialUrl || selectedAchievement.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Achievements;