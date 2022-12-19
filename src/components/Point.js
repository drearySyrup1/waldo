import React from "react";
import { StyledPoint } from "./styles/GamePlay.styled";
import { Checkmark } from "./styles/TopBar.styled";

const Point = ({ x, y, green }) => {
  return (
    <StyledPoint x={x} y={y} green={green}>
      {green && <Checkmark />}
    </StyledPoint>
  );
};

export default Point;
