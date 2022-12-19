import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  position: relative;
  border-radius: 10px;

  @media (width < 768px) {
    display: flex;
    width: ${({ cardWidth }) => `${cardWidth}px`};
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    > * {
      scroll-snap-align: center;
      scroll-snap-stop: always;
      flex-shrink: 0;
    }
  }
`;

export const InfoOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  opacity: 0.8;
  display: grid;
  place-content: center;
  place-items: center;
  gap: 20px;

  display: none;

  & span {
    font-size: 1.5rem;
    color: white;
  }

  @media (width < 768px) {
    display: grid;
  }
`;

export const Dot = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid rgb(0 0 0 / 0.4);
  border-radius: 50%;
  background-color: #fff;
  animation: swipe infinite 1s;

  @keyframes swipe {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }
`;

export const Heading = styled.h1`
  color: #fff;

  @media (width < 425px) {
    font-size: 1.5rem;
  }
`;

export const StyledLevelSelect = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
`;
