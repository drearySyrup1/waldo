import React from "react";
import { StyledLevelSelectCard } from "./styles/LevelSelectCard.styled";

const LevelSelectCard = ({ name, image }) => {
  return (
    <StyledLevelSelectCard>
      <h1 className="name">{name}</h1>
      <img src={`./levels/${image}`} alt="" />
    </StyledLevelSelectCard>
  );
};

export default LevelSelectCard;
