import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  background-color: hsl(0 0% 0% / 0.3);
  top: 0;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-content: center;
  color: white;
`;

export const LoadingBox = styled.div`
  background-color: hsl(0 0% 10%);
  padding: 1.5rem;
  border-radius: 1rem;
  display: grid;
  justify-content: center;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;

const dotSize = 12;
const animationDuration = 500;
const dotAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

export const Dot = styled.div`
  width: ${dotSize}px;
  height: ${dotSize}px;
  border-radius: 50%;
  opacity: 0;
  background-color: #fff;

  &.birka {
    animation: ${dotAnimation} ${animationDuration}ms;
    animation-iteration-count: 2;
    animation-direction: alternate;
    animation-delay: ${({ index }) =>
      animationDuration * index * 0.3}ms;
  }
`;
