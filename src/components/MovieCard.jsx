import { render } from 'enzyme';
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default MovieCard;
