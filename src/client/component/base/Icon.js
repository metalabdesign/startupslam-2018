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
  burger: (
    <svg
      width="27px"
      height="19px"
      viewBox="0 0 27 19"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Home-Screen"
          transform="translate(-15.000000, -65.000000)"
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <g id="menu" transform="translate(16.000000, 65.910000)">
            <path
              d="M0.672200905,0.379232155 L24.6722009,0.379232155 M0.672200905,8.37923216 L24.6722009,8.37923216 M0.672200905,16.3792322 L24.6722009,16.3792322"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  leftArrow: (
    <svg
      width="12px"
      height="22px"
      viewBox="0 0 12 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Details-Screen"
          transform="translate(-9.000000, -47.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <g id="Bars/Navigation/Navigation-Bar">
            <g id="Pin-Left" transform="translate(9.000000, 47.000000)">
              <path
                d="M3.62132034,11 L11.5606602,3.06066017 C12.1464466,2.47487373 12.1464466,1.52512627 11.5606602,0.939339828 C10.9748737,0.353553391 10.0251263,0.353553391 9.43933983,0.939339828 L0.439339828,9.93933983 C-0.146446609,10.5251263 -0.146446609,11.4748737 0.439339828,12.0606602 L9.43933983,21.0606602 C10.0251263,21.6464466 10.9748737,21.6464466 11.5606602,21.0606602 C12.1464466,20.4748737 12.1464466,19.5251263 11.5606602,18.9393398 L3.62132034,11 Z"
                id="Path"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  star: (
    <svg
      width="21px"
      height="21px"
      viewBox="0 0 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Book-App-[Black-Ver]"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Details-Screen"
          transform="translate(-123.000000, -425.000000)"
          stroke="#FFFFFF"
        >
          <g id="Group-2" transform="translate(16.000000, 425.000000)">
            <polygon
              id="Shape"
              points="117.494779 0.265127756 120.276171 7.21860793 127.229651 7.21860793 121.666867 12.0860441 123.752911 19.7348722 117.494779 14.8674361 111.236647 19.7348722 113.322691 12.0860441 107.759907 7.21860793 114.713387 7.21860793"
            />
          </g>
        </g>
      </g>
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
