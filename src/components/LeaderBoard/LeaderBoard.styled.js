import styled from "styled-components";
import { FaMedal } from "react-icons/fa";
import { Heading } from "../styles/LevelSelect.styled";

export const SmHeading = styled(Heading)`
  font-size: 1.3rem;
`;

export const Medal = styled(FaMedal)`
  fill: ${({ color }) => {
    switch (color) {
      case "1":
        return "hsl(56 100% 50%);";

      case "2":
        return "hsl(0 0% 80%);";

      case "3":
        return "hsl(32 56% 47%);";
      default:
        return "white;";
    }
  }};
`;

export const LevelCard = styled.div`
  background-color: grey;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  display: grid;
  place-content: center;
  box-shadow: 0 0 25px rgb(0 0 0 / 0.6),
    inset 0 0 10px 2px rgb(0 0 0 / 0.6);
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-image: ${({ img }) =>
    `url(../../../levels/thumbnails/${img});`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300%;
  position: relative;
  overflow: hidden;
  transition: scale 300ms;
  cursor: pointer;

  & > * {
    z-index: 2;
  }

  &::after {
    transition: opacity 50ms;

    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.3;
    z-index: 1;
  }

  &:hover {
    scale: 0.98;
  }

  &:active {
    transition: scale 50ms;
    scale: 0.95;
  }

  &:hover::after {
    opacity: 0.5;
  }
`;

export const SwipeText = styled.p`
  color: white;
  display: none;
  @media (width < 768px) {
    display: block;
  }
`;

export const LevelSelectWrap = styled.div`
  display: flex;
  gap: 10px;

  @media (width < 768px) {
    display: flex;
    width: 120px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    > * {
      scroll-snap-align: center;
      scroll-snap-stop: always;
      flex-shrink: 0;
    }
  }

  .active {
    box-shadow: 0 0 20px rgba(153, 0, 255, 0.753);
  }
`;

export const ScoreAlign = styled.p`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const StyledLeaderboard = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
`;

const EntryGeneralStyle = styled.div`
  display: grid;
  grid-template-columns: 70px 60vw 70px;
  justify-items: center;
  color: white;
  font-weight: bold;
  font-size: 0.95rem;
`;

export const TableHeadings = styled(EntryGeneralStyle)``;

export const TableEntry = styled(EntryGeneralStyle)`
  background-color: hsl(0 0% 20%);
  border-radius: 10px;

  & > *:first-child {
    justify-self: start;
    margin-left: 20px;
  }
`;

export const Entries = styled.div`
  display: grid;
  gap: 10px;
`;

export const Pages = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
`;
