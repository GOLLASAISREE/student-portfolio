import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Paper, Chip, Divider } from '@mui/material';
import { CalendarToday, Schedule, Person } from '@mui/icons-material';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Box sx={{ pt: 8, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Article Not Found
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            The article you're looking for doesn't exist.
          </Typography>
        </Container>
      </Box>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Box sx={{ pt: 8, minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Chip
            label={post.category}
            color="primary"
            variant="outlined"
            sx={{ mb: 3 }}
          />
          
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3
            }}
          >
            {post.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap', mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Person sx={{ fontSize: 20, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">
                {post.author}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarToday sx={{ fontSize: 20, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">
                {formatDate(post.publishDate)}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Schedule sx={{ fontSize: 20, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">
                {post.readTime}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
            {post.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                variant="outlined"
                size="small"
              />
            ))}
          </Box>

          <Divider sx={{ mb: 4 }} />
        </Box>

        {/* Featured Image */}
        <Box 
          component="img"
          src={post.image || "/images/blog/placeholder.jpg"}
          alt={post.title}
          sx={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: 2,
            mb: 6,
            boxShadow: 3
          }}
        />

        {/* Content */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 0,
            '& h2': {
              fontSize: '2rem',
              fontWeight: 600,
              mt: 4,
              mb: 2,
              color: 'text.primary'
            },
            '& h3': {
              fontSize: '1.5rem',
              fontWeight: 600,
              mt: 3,
              mb: 2,
              color: 'text.primary'
            },
            '& p': {
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 3,
              color: 'text.primary'
            },
            '& ul, & ol': {
              pl: 3,
              mb: 3
            },
            '& li': {
              mb: 1,
              fontSize: '1.1rem',
              lineHeight: 1.6
            },
            '& strong': {
              fontWeight: 600
            }
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Paper>

        {/* Back to Blog Link */}
        <Box sx={{ mt: 6, pt: 4, borderTop: 1, borderColor: 'divider' }}>
          <Typography 
            variant="body2" 
            component="a" 
            href="/blog"
            sx={{ 
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            ← Back to all articles
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPostPage;