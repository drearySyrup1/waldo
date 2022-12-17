import React from "react";
import levels from "../levels";
import LevelSelectCard from "./LevelSelectCard";
import {
  StyledLevelSelect,
  Grid,
  Heading,
} from "./styles/LevelSelect.styled";

const LevelSelect = () => {
  return (
    <StyledLevelSelect>
      <Heading>CHOOSE LEVEL TO PLAY</Heading>
      <Grid>
        {levels.map((item, index) => {
          return <LevelSelectCard key={index} {...item} />;
        })}
      </Grid>
    </StyledLevelSelect>
  );
};

export default LevelSelect;
