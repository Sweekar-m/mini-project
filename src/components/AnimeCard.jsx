import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const AnimeCard = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.mal_id}`} style={{ textDecoration: 'none' }}>
      <Box 
        sx={{ 
          p: 2, 
          borderRadius: 2, 
          backgroundColor: '#f1f1f1', 
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          boxShadow: '0px 2px 10px rgba(148, 19, 19, 0.1)',
          '&:hover': {
            transform: 'scale(1.05)', 
            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
            backgroundColor: '#f7f7f7',
          },
          width: '450px', // Ensures the card takes full width available in its grid cell
          maxWidth: 450, // **Adjust this to set a fixed card width** 
          height: 650, // **Adjust this to set a fixed card height** 
        }}
      >
        <Box 
          component="img"
          src={anime.images.jpg.image_url} 
          alt={anime.title} 
          sx={{ 
            width: '100%', 
            height: '90%', // Ensure image maintains its aspect ratio
            borderRadius: '10px', 
            transition: 'transform 0.3s ease-in-out', 
            objectFit: 'cover', // Ensures the image fits within the bounds of the card without distorting
            '&:hover': {
              transform: 'scale(1.1)', 
            }
          }} 
        />
        <Typography 
          variant="h6" 
          sx={{ 
            mt: 1, 
            color: '#333', 
            fontWeight: 'bold', 
            marginTop:'10px',
            textAlign: 'center',
            transition: 'color 0.3s ease-in-out',
            '&:hover': {
              color: '#007BFF'
            }
          }}
        >
          {anime.title}
        </Typography>
      </Box>
    </Link>
  );
};

export default AnimeCard;
