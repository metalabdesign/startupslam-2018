import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BookImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;

const BookWrapper = styled.div`
  width: 128px;
  display: block;
`;

const BookTitle = styled.div`
  text-overflow: ellipses;
  overflow: hidden;
`;

const BookAuthor = styled.div``;

class Book extends React.PureComponent {
  static defaultProps = {
    book: {
      id: 1,
      title: 'The Red Queen',
      image:
        'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2014/06/red_queen_book_cover_a_p.jpg',
      author: {
        name: 'Victoria Aveyard',
      },
    },
  };
  render() {
    const {id, title, image, author} = this.props.book;
    return (
      <BookWrapper as={Link} to={`/book/${id}`}>
        <BookImage src={image} alt={title} />
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author.name}</BookAuthor>
      </BookWrapper>
    );
  }
}

export default Book;
