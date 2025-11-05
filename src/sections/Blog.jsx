import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  CardActions
} from '@mui/material';
import { CalendarToday, Schedule, ArrowForward } from '@mui/icons-material';
import { blogPosts, blogCategories } from '../data/blogPosts';
import SectionHeader from '../components/UI/SectionHeader';

const BlogPostCard = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
        image={post.image || "/images/blog/placeholder.jpg"}
        alt={post.title}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Chip
            label={post.category}
            color="primary"
            variant="outlined"
            size="small"
          />
          {post.featured && (
            <Chip
              label="Featured"
              color="secondary"
              size="small"
            />
          )}
        </Box>

        <Typography variant="h6" component="h3" gutterBottom fontWeight="600">
          {post.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {post.excerpt}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {formatDate(post.publishDate)}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {post.readTime}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          size="small"
          endIcon={<ArrowForward />}
          href={`/blog/${post.slug}`}
          sx={{ textTransform: 'none' }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

const Blog = ({ showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const displayedPosts = showAll 
    ? blogPosts 
    : blogPosts.filter(post => post.featured).slice(0, 3);

  const filteredPosts = selectedCategory === 'All' 
    ? displayedPosts 
    : displayedPosts.filter(post => post.category === selectedCategory);

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader 
          title={showAll ? "Blog & Articles" : "Latest Articles"} 
          subtitle={showAll ? "My thoughts on web development and technology" : "Recent writing on web development"}
          align="center"
        />

        {/* Category Filter - Only show when displaying all posts */}
        {showAll && (
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
              {blogCategories.filter(cat => cat !== 'All').map((category) => (
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
        )}

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} md={6} lg={showAll ? 6 : 4} key={post.id}>
              <BlogPostCard post={post} />
            </Grid>
          ))}
        </Grid>

        {/* View All Button - Only show on home page */}
        {!showAll && blogPosts.length > 3 && (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              href="/blog"
              endIcon={<ArrowForward />}
            >
              View All Articles
            </Button>
          </Box>
        )}

        {filteredPosts.length === 0 && (
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary" 
            sx={{ mt: 4 }}
          >
            No articles found in this category.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Blog;