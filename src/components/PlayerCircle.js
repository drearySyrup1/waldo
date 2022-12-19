import React from "react";
import { Circle } from "./styles/TopBar.styled";
import { Checkmark } from "./styles/TopBar.styled";

const PlayerCircle = ({ checked, children }) => {
  return (
    <Circle>
      {children}
      {checked && <Checkmark />}
    </Circle>
  );
};

export default PlayerCircle;
