import { keyframes } from 'styled-components';

export const moveFadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: 50px;
  }
  to {
    opacity: 1;
    margin-top: 15px;
  }
`;

export const opacIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;
