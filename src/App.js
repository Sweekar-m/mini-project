// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Home from './pages/Home';
import AnimeList from './pages/AnimeList';
import AnimeDetails from './pages/AnimeDetails';
import About from './pages/About'

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/About">About Us</Button>
        <Button color="inherit" component={Link} to="/anime-list">Anime List</Button>
       
      </Toolbar>
    </AppBar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime-list" element={<AnimeList />} />
      <Route path="/anime/:id" element={<AnimeDetails />} />
      <Route path='About' element={<About/>}/>
    </Routes>
  </Router>
);

export default App;
