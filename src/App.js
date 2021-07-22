import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.array),
};

export default App;
