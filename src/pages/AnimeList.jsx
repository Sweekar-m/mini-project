// AnimeList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, CircularProgress, Box, Typography } from '@mui/material';
import AnimeCard from '../components/AnimeCard';

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]); // Stores the anime list
  const [search, setSearch] = useState(''); // User input for searching anime
  const [loading, setLoading] = useState(true); // Loading state for better UX

  // Fetch anime list using Axios
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/anime');
        setAnimeList(response.data.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
      } finally {
        setLoading(false); // Data is loaded, so set loading to false
      }
    };

    fetchAnime();
  }, []);

  // Filter anime list based on search input
  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box 
      sx={{ 
        p: 3, 
        backgroundColor: '#f4f4f9', 
        minHeight: '100vh',
        backgroundImage: 'url(https://images.alphacoders.com/135/1352212.png)', 
        backgroundSize: 'cover', // Controls background image size
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keeps background fixed while scrolling
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 2, 
          textAlign: 'center', 
          color: 'white',
        }}
      >
        Anime List
      </Typography>

      {/* Search Field */}
      <TextField
        label="Search Anime"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ 
          mb: 4, 
          backgroundColor: '#fff', 
          borderRadius: 2 
        }}
      />

      {/* Loading Spinner */}
      {loading ? (
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '50vh' 
          }}
        >
          <CircularProgress />
        </Box>
      ) : filteredAnime.length > 0 ? (
        <Grid 
          container 
          spacing={2} // Adjust gap between cards
          justifyContent="center" // Ensure the grid is centered
          sx={{ 
            px: 2, // Add padding to left and right of grid for gap
          }}
        >
          {filteredAnime.map((anime) => (
            <Grid 
              item 
              xs={12} sm={6} md={5} lg={4} key={anime.mal_id}
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
              }}
            >
              <AnimeCard 
                anime={anime} 
                sx={{
                  maxWidth: 650, // Ensure card has a consistent width
                  width: '100%', // Allow the card to fill the container
                }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mt: 4, 
            color: 'white',
          }}
        >
          No anime found. Try searching for something else.
        </Typography>
      )}
    </Box>
  );
};

export default AnimeList;
