import * as React from 'react';
import styled, {keyframes} from 'styled-components';

const offset = 187;

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const colors = keyframes`
  0% { stroke: #4285F4; }
	25% { stroke: #DE3E35; }
	50% { stroke: #F7C223; }
	75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;

const dash = keyframes`
 0% { stroke-dashoffset: ${offset}px; }
 50% {
   stroke-dashoffset: ${offset / 4}px;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: ${offset}px;
   transform:rotate(450deg);
 }
 `;

const StyledSpinner = styled.svg`
  animation: ${rotator} ${({duration}) => `${duration}s`} linear infinite;
`;

const StyledCircle = styled.circle`
  stroke-dasharray: ${offset}px;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} ${({duration}) => `${duration}s`} ease-in-out infinite,
    ${colors} ${({duration}) => `${duration * 4}s`} ease-in-out infinite;
`;

class LoadingSpinner extends React.PureComponent {
  render() {
    return (
      <StyledSpinner
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledCircle
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </StyledSpinner>
    );
  }
}

export default LoadingSpinner;
