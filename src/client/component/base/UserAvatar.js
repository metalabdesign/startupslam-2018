import * as React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
`;

class UserAvatar extends React.PureComponent {
  render() {
    const {user} = this.props;
    return <Image src={user.profilePhoto} />;
  }
}

export default UserAvatar;
