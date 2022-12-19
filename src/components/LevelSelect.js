import React, { useCallback, useState, useRef } from "react";
import levels from "../levels";
import LevelSelectCard from "./LevelSelectCard";
import { Link } from "react-router-dom";
import {
  StyledLevelSelect,
  Grid,
  Heading,
  InfoOverlay,
  Dot,
} from "./styles/LevelSelect.styled";

const LevelSelect = () => {
  const [cardWidth, setCardWidth] = useState(0);
  const [displayInfo, setDisplayInfo] = useState(true);
  const gridRef = useRef();

  const changeCardWidth = useCallback((newValue) => {
    setCardWidth(newValue);
  }, []);

  return (
    <StyledLevelSelect>
      <Heading>CHOOSE LEVEL TO PLAY</Heading>
      <Grid
        onTouchMove={() => setDisplayInfo(false)}
        ref={gridRef}
        cardWidth={cardWidth}
      >
        {displayInfo && (
          <InfoOverlay>
            <Dot />
            <span>Swipe left</span>
          </InfoOverlay>
        )}
        {levels.map((item, index) => {
          return (
            <Link to={`game/${item.id}`}>
              <LevelSelectCard
                changeCardWidth={changeCardWidth}
                key={index}
                {...item}
              />
            </Link>
          );
        })}
      </Grid>
    </StyledLevelSelect>
  );
};

export default LevelSelect;
