import * as React from 'react';

import Container from '../base/Container';
import Text from '../base/Text';
import Movie from '../base/Movie';
import Carousel from '../base/Carousel';

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <div>
        <Container>Carousel!</Container>
        <Container>
          <Text.H2>Popular</Text.H2>
          <Carousel>
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
