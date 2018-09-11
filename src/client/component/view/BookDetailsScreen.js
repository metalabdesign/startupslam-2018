import * as React from 'react';

import Text from '../base/Text';
import StarRating from '../base/StarRating';
import Book from '../base/Book';
import Container from '../base/Container';
import SpacedContent from '../base/SpacedContent';
import Icon from '../base/Icon';
import Separator from '../base/Separator';

class BookDetailsScreen extends React.PureComponent {
  static defaultProps = {
    book: {
      title: 'XXX',
      author: {
        name: 'YYY',
      },
      rating: 4.6,
      reviewCount: 1202,
      similarBooks: [],
    },
  };
  render() {
    const {book} = this.props;
    return (
      // ...
      <div>
        <Container>
          <SpacedContent>
            <Text.H1>{book.title}</Text.H1>
            <Icon name="bookmark" />
            <div>{book.author.name}</div>
          </SpacedContent>
          <StarRating value={book.rating} />
          {book.reviewCount}
        </Container>
        <Container>
          <Separator />
          <div>SOME STUFF</div>
          <Separator />
        </Container>
        <Container>
          {book.similarBooks.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
        </Container>
      </div>
    );
  }
}

export default BookDetailsScreen;
