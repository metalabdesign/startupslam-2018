import * as React from 'react';

class SpacedContent extends React.PureComponent {
  render() {
    const {children} = this.props;
    return <div>{children}</div>;
  }
}

export default SpacedContent;
