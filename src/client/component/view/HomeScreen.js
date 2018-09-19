import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

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
      <div>
        <Container>
          <svg
            width="30"
            height="30"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
              fill="#fff"
            />
          </svg>
          <span
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '2em',
              paddingLeft: '0.5em',
            }}
          >
            METAFLIX
          </span>
        </Container>
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
      </div>
    );
  }
}

export default HomeScreen;
