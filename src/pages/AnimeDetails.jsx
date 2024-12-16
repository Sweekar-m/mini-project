import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, CircularProgress, Paper, Button } from '@mui/material';

const AnimeDetails = () => {
  const { id } = useParams(); // Extract the anime ID from URL
  const [anime, setAnime] = useState(null); // Store anime details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data); // Store anime data
      } catch (error) {
        console.error('Error fetching anime details:', error);
        setError(true); // Handle error
      } finally {
        setLoading(false); // Turn off loading spinner
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh', 
          backgroundColor: '#f4f4f9' 
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error || !anime) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh', 
          backgroundColor: '#f4f4f9' 
        }}
      >
        <Typography variant="h5" sx={{ color: 'error.main' }}>
          Sorry, anime details could not be loaded. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        backgroundColor: '#f4f4f9', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        p: 4, 
        backgroundImage: 'url(https://images.alphacoders.com/135/1352212.png)', 
        backgroundSize: 'cover', // Controls background image size
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keeps background fixed while scrolling
      }}
    >
      <Paper 
        elevation={12} 
        sx={{ 
          display: 'flex', 
          maxWidth: 1000, 
          borderRadius: 3, 
          overflow: 'hidden', 
          p: 4,
          background: 'linear-gradient(to bottom, #ffffff, #f7f7f7)', // Gradient from white to light gray
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.15)',
          }
        }}
      >
        {/* Image Section */}
        <Box 
          sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <Box 
            component="img" 
            src={anime.images.jpg.image_url} 
            alt={anime.title} 
            sx={{ 
              maxWidth: '100%', 
              borderRadius: 2, 
              objectFit: 'cover', 
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              }
            }} 
          />
        </Box>

        {/* Details Section */}
        <Box sx={{ flex: 2, pl: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
            {anime.title}
          </Typography>

          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6, mt: 2 }}>
            {anime.synopsis || 'No synopsis available.'}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant="body2" sx={{ color: '#777' }}>
              Episodes: {anime.episodes || 'N/A'}
            </Typography>
            <Typography variant="body2" sx={{ color: '#777' }}>
              Rating: {anime.rating || 'N/A'}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2" sx={{ color: '#777' }}>
              Status: {anime.status || 'N/A'}
            </Typography>
            <Typography variant="body2" sx={{ color: '#777' }}>
              Aired: {anime.aired?.string || 'N/A'}
            </Typography>
          </Box>

          <Button 
            variant="contained" 
            sx={{ 
              mt: 3, 
              backgroundColor: '#007BFF', 
              '&:hover': { backgroundColor: '#0056b3' },
            }}
            href={anime.url}
          >
            View on Official Site
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AnimeDetails;
