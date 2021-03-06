import * as React from 'react';

const icons = {
  bookmark: (
    <svg
      id="i-bookmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
    </svg>
  ),
};

class Icon extends React.PureComponent {
  render() {
    const {name} = this.props;
    return icons[name];
  }
}

export default Icon;
