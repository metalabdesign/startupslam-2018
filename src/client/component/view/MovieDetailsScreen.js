import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

import {Query} from 'react-apollo';
import Text from '../base/Text';
import StarRating from '../base/StarRating';
import Movie from '../base/Movie';
import Container from '../base/Container';
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

const HeaderWrapper = styled.div`
  text-align: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
`;

const BackArrow = styled.div`
  display: inline-block;
  float: left;
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  display: inline-block;
`;

const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding-right: 20px;
  padding-top: 3px;
`;

const DetailImageWrapper = styled.div`
  background-image: url(${(props) => props.image});
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 221px;
  position: relative;
  bottom-padding: 19.72px;
`;

const DetailImageBannerBlur = styled.div`
  position: absolute;
  transform: translate(-0%, -50%);
  top: 90%;
  height: 43px;
  width: 100%;

  background: rgba(172, 172, 172, 0.85);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  -webkit-filter: blur(1px); /* Safari 6.0 - 9.0 */
  filter: blur(1px);
`;

const DetailImageBanner = styled.div`
  position: absolute;
  transform: translate(-0%, -50%);
  top: 90%;
  height: 43px;
  width: 100%;
`;

const DetailImageBannerContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: #fff;
`;

const MovieTitleWrapper = styled.div`
  display: inline-block;
`;

const MovieTitleLike = styled.div`
  float: right;
`;

const DetailSection = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ActorSection = styled.div`
  padding-top: 14.5px;
  color: #d8d8d8;
  opacity: 0.6;
`;

const GenreSection = styled.div`
  opacity: 0.6;
  color: #ffffff;
  padding-top: 8px;
  padding-bottom: 20px;
`;

class MovieDetailsScreen extends React.PureComponent {
  static defaultProps = {
    movie: {
      title: 'XXX',
      actors: [
        {
          name: 'YYY',
        },
        {
          name: 'ZZZ',
        },
      ],
      rating: 4.6,
      reviewCount: 1202,
      similarMovies: [],
    },
  };

  render() {
    let {movie} = this.props;
    return (
      <Query query={GET_MOVIE} variables={{id: this.props.id}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          console.log(data.movie)
          movie = data.movie;
          const similarMovies = [];

          return (
            <div>
              <Container>
                <HeaderWrapper>
                  <BackArrow>
                    <Icon name="leftArrow" />
                    <Text.H3>Home</Text.H3>
                  </BackArrow>
                  <TitleWrapper>
                    <Text.H3>Predestination</Text.H3>
                  </TitleWrapper>
                </HeaderWrapper>
              </Container>

              <DetailImageWrapper image={movie.detailImage}>
                <DetailImageBannerBlur />
                <DetailImageBanner>
                  <DetailImageBannerContent>
                    <PlayIconWrapper>
                      <Icon name="play" />
                    </PlayIconWrapper>
                    Play
                  </DetailImageBannerContent>
                </DetailImageBanner>
              </DetailImageWrapper>

              <Container>
                <DetailSection>
                  <div>
                    <MovieTitleWrapper>
                      <Text.H1>{movie.title}</Text.H1>
                    </MovieTitleWrapper>
                    <MovieTitleLike>
                      <Icon name="heart" />
                    </MovieTitleLike>
                  </div>
                  <ActorSection>
                    <Text.H3>{movie.actors.map((a) => a.name).join(', ')}</Text.H3>
                  </ActorSection>
                  <GenreSection>
                    <Text.H3>{movie.genres.join(', ')}</Text.H3>
                  </GenreSection>
                </DetailSection>
                <StarRating rating={movie.rating} />
                {movie.reviewCount} reviews
              </Container>

              <Container>
                <Separator />
                <div>SOME STUFF</div>
                <Separator />
              </Container>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default MovieDetailsScreen;
