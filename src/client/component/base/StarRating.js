import * as React from 'react';
import Icon from '../base/Icon';

class StarRating extends React.PureComponent {
  render() {
    let rating = Math.round(this.props.rating);
    let stars = [];

    for(let i = 0; i < rating; i++) {
      stars.push(<Icon name="starFilled" />)
    }

    for(let i = 0; i < (rating / 5) + 1; i++) {
      stars.push(<Icon name="star" />)
    }

    return (
      <div>
        {stars}
      </div>
    )
  }
}

export default StarRating;
