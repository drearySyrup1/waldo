import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";

export const TopBarFullWidth = styled.div`
  background-color: ${({ theme }) => theme.colors.topbar};
  width: 100vw;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.5);
  display: flex;
  justify-content: center;
  padding: 1.3rem;
`;

export const StyledTopBarGame = styled.div`
  width: min(1000px, 100%);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "circle . timer btn github";

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "circle . timer btn";
  }
  @media (max-width: 375px) {
    grid-template-columns: auto repeat(2, 1fr);
    grid-template-areas: "circle timer btn";
  }
`;

export const StyledTopbar = styled.div`
  width: min(1000px, 100%);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: ". btn github";

  @media (max-width: 786px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "btn github";
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: hsl(0 0% 12%);
  border: 2px solid hsl(0 0% 25%);
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

export const CircleWrap = styled.div`
  display: flex;
  grid-area: circle;
  gap: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Timer = styled.h1`
  color: #fff;
  grid-area: timer;
  grid-column: 1 / -1;
  justify-self: center;

  @media (max-width: 375px) {
    grid-column: auto;
  }
`;

export const Checkmark = styled(ImCheckmark)`
  color: green;
  font-size: 2rem;
  position: absolute;
`;
