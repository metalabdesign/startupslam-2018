import * as React from 'react';
import styled from 'styled-components';
import {FormattedRelative} from 'react-intl';

import StarRating from './StarRating';
import UserAvatar from './UserAvatar';

const ReviewContainer = styled.div``;

class Review extends React.PureComponent {
  render() {
    const {review} = this.props;
    const {rating, postedBy, createdAt} = review;
    return (
      <ReviewContainer>
        <UserAvatar user={postedBy} />
        <StarRating value={rating} />
        <FormattedRelative value={createdAt} />
      </ReviewContainer>
    );
  }
}

export default Review;
