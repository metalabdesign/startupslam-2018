import * as React from 'react';
import gql from 'graphql-tag';

import {Query} from 'react-apollo';

import Container from '../base/Container';
import Text from '../base/Text';
import BannerMovie from '../base/BannerMovie';
import Movie from '../base/Movie';
import Carousel from '../base/Carousel';
import LoadingSpinner from '../base/LoadingSpinner';

const ALL_MOVIES = gql`
  {
    movies {
      id
      title
      coverImage
      wideImage
      category
    }
  }
`;

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <Query query={ALL_MOVIES}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          const banner = data.movies.filter((movie) => {
            return movie.category == 'banner';
          });

          const colesPicks = data.movies.filter((movie) => {
            return movie.category == 'cole';
          });

          const recommended = data.movies.filter((movie) => {
            return movie.category == 'recommended';
          });

          return (
            <div>
              <Container>
                {banner.map((movie) => {
                  return <BannerMovie key={movie.id} movie={movie} />;
                })}
              </Container>
              <Container>
                <Text.H1>Cole's Picks</Text.H1>
                <Carousel>
                  {colesPicks.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                  })}
                </Carousel>
              </Container>
              <Container>
                <Text.H1>Recommended</Text.H1>
                <Carousel>
                  {recommended.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                  })}
                </Carousel>
              </Container>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default HomeScreen;
