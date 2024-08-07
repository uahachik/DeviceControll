import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StarrySpinner = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 30%, rgba(212, 228, 245, 1) 30%, rgba(212, 228, 245, 1) 70%, rgba(255, 255, 255, 0.25) 70%);
  background-size: 5px 5px;
  animation: ${rotate} 2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 30%, rgba(212, 228, 245, 1) 30%, rgba(212, 228, 245, 1) 70%, rgba(255, 255, 255, 0.25) 70%);
    background-size: 5px 5px;
    animation: ${rotate} 1s linear infinite;
  }
`;
