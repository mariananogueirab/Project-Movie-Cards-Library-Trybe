import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map(({ name }) => (
          <MovieCard key={ name } />
        ))}
      </section>
    );
  }
}

MovieList.proptype = {
  movies: PropTypes.objectOf(PropTypes.array),
};

export default MovieList;
