import styled from "styled-components";

export const StyledLevelImg = styled.img`
  width: 100%;
`;

export const PointWrap = styled.div`
  width: 1100px;
`;

export const StyledImgWrapper = styled.div`
  border-radius: 10px;
  overflow: auto;
  width: min(1100px, 95vw);
  position: relative;
`;

export const StyledPoint = styled.div`
  width: var(--point-size);
  height: var(--point-size);
  border: 3px solid ${({ green }) => (green ? "green" : "white")};
  border-radius: 50%;
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
  display: grid;
  place-items: center;
`;

export const StyledGamePlay = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  margin-top: 50px;
`;
