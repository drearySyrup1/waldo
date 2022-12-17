import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;

  @media (width < 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h1`
  color: #fff;
`;

export const StyledLevelSelect = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
`;
