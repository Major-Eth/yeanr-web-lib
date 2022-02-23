import styled, { keyframes } from "styled-components";

interface Props {
  color: string;
  size: number;
}

const motion = () => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<Props>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 4px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${motion} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ color }) => color} transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;
