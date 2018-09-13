import * as React from 'react';

import Text from '../base/Text';
import StarRating from '../base/StarRating';
import Movie from '../base/Movie';
import Container from '../base/Container';
import SpacedContent from '../base/SpacedContent';
import Icon from '../base/Icon';
import Separator from '../base/Separator';

class MovieDetailsScreen extends React.PureComponent {
  static defaultProps = {
    movie: {
      title: 'XXX',
      director: {
        name: 'YYY',
      },
      rating: 4.6,
      reviewCount: 1202,
      similarMovies: [],
    },
  };

  render() {
    console.log(movie)
    const {movie} = this.props;
    return (
      // ...
      <div>
        <Container>
          <SpacedContent>
            <Text.H1>{movie.title}</Text.H1>
            <Icon name="bookmark" />
            <div>{movie.director.name}</div>
          </SpacedContent>
          <StarRating value={movie.rating} />
          {movie.reviewCount}
        </Container>
        <Container>
          <Separator />
          <div>SOME STUFF</div>
          <Separator />
        </Container>
        <Container>
          {movie.similarMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </Container>
      </div>
    );
  }
}

export default MovieDetailsScreen;
