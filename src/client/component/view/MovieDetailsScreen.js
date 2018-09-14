import * as React from 'react';
import gql from 'graphql-tag';

import {Query} from 'react-apollo';
import Text from '../base/Text';
import StarRating from '../base/StarRating';
import Movie from '../base/Movie';
import Container from '../base/Container';
import SpacedContent from '../base/SpacedContent';
import Icon from '../base/Icon';
import Separator from '../base/Separator';

export const GET_MOVIE = gql`
  query movie($id: ID!) {
    movie(id: $id) {
      id
      title
      actors {
        name
      }
      genres
      detailImage
      synopsis
      reviews {
        id
        rating
        content
        user {
          name
          photo
        }
      }
      rating
      reviewCount
    }
  }
`;

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
    // const {movie} = this.props;
    return (
      // ...
      <Query query={GET_MOVIE} variables={{id: this.props.id}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          const movie = data.movie;
          const similarMovies = [];

          return (
            <div>
              <Container>
                <SpacedContent>
                  <Text.H1>{movie.title}</Text.H1>
                  <Icon name="bookmark" />
                  <div>{movie.actors.map((a) => a.name).join(', ')}</div>
                </SpacedContent>
                <StarRating value={movie.rating} />
                {movie.reviewCount} reviews
              </Container>
              <Container>
                <Separator />
                <div>SOME STUFF</div>
                <Separator />
              </Container>
              <Container>
                {similarMovies.map((movie) => {
                  return <Movie movie={movie} key={movie.id} />;
                })}
              </Container>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default MovieDetailsScreen;
