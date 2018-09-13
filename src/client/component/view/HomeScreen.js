import * as React from 'react';
import gql from 'graphql-tag';

import {Query} from 'react-apollo';

import Container from '../base/Container';
import Text from '../base/Text';
import Movie from '../base/Movie';
import Carousel from '../base/Carousel';
import LoadingSpinner from '../base/LoadingSpinner';

const MOVIES_BY_CATEGORY = gql`
  {
    movies {
      id
      title
      image
      actors
      genres
      reviews
      rating
      reviewCount
    }
  }
`;

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <div>
        <Container>Carousel!</Container>
        <Container>
          <Text.H2>Popular</Text.H2>
          <Carousel>
            <Query query={MOVIES_BY_CATEGORY}>
              {({loading, error, data}) => {
                console.log(data)
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                return (
                  <div>
                    {data.movies.map((movie) => {
                      <Movie movie={movie} />;
                    })}
                  </div>
                );
              }}
            </Query>
            <Movie />
            <Movie />
            <Movie />
          </Carousel>
        </Container>
        <Container>
          <Text.H2>Recommended</Text.H2>
        </Container>
      </div>
    );
  }
}

export default HomeScreen;
