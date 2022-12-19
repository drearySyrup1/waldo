import React, { useRef, useEffect } from "react";
import { StyledLevelSelectCard } from "./styles/LevelSelectCard.styled";

let previousWidth = 0;

const LevelSelectCard = ({ name, image, changeCardWidth }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const { width } = cardRef.current.getBoundingClientRect();
      if (previousWidth !== width) {
        changeCardWidth(width);
        previousWidth = width;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [changeCardWidth]);

  return (
    <StyledLevelSelectCard ref={cardRef}>
      <h1 className="name">{name}</h1>
      <img src={`./levels/${image}`} alt="" />
    </StyledLevelSelectCard>
  );
};

export default LevelSelectCard;
