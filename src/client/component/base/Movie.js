import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;

const MovieWrapper = styled.div`
  width: 128px;
  display: block;
`;

const MovieTitle = styled.div`
  text-overflow: ellipses;
  overflow: hidden;
`;

const MovieDirector = styled.div``;

class Movie extends React.PureComponent {
  static defaultProps = {
    movie: {
      id: 1,
      title: 'The Red Queen',
      image:
        'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2014/06/red_queen_book_cover_a_p.jpg',
      director: {
        name: 'Victoria Aveyard',
      },
    },
  };
  render() {
    const {id, title, image, director} = this.props.movie;
    return (
      <MovieWrapper as={Link} to={`/movie/${id}`}>
        <MovieImage src={image} alt={title} />
        <MovieTitle>{title}</MovieTitle>
        <MovieDirector>{director.name}</MovieDirector>
      </MovieWrapper>
    );
  }
}

export default Movie;
