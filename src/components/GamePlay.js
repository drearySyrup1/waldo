import React, { useEffect, useRef, useState } from "react";

import {
  StyledLevelImg,
  StyledGamePlay,
  StyledImgWrapper,
  PointWrap,
} from "./styles/GamePlay.styled";

import Point from "./Point";
import CrossIcon from "./CrossIcon";
import SelectMenu from "./SelectMenu";

const POINT_SIZE = 50;

const owl = {
  startX: 661.546875,
  endX: 672.546875,
  startY: 185.53125,
  endY: 204.53125,
};

const checkIfFound = ({ x, y, coords }) => {
  if (
    x >= coords.startX &&
    x <= coords.endX &&
    y >= coords.startY &&
    y <= coords.endY
  )
    return true;
  return false;
};

const GamePlay = ({ level }) => {
  const gameWrapRef = useRef(); // later to check for menu select if goes out of the screen
  const imgWrapRef = useRef();
  const [points, setPoints] = useState([]);
  const [crossVisible, setCrossVisible] = useState(true);
  const [crossCords, setCrossCords] = useState({ x: 0, y: 0 });
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [selectLocation, setSelectLocation] = useState({
    x: 0,
    y: 0,
  });
  const crossRef = useRef();
  const updateCrossRef = (newRef) => (crossRef.current = newRef);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--point-size",
      `${POINT_SIZE}px`
    );
  }, []);

  const addPoint = ({ x, y, rect, green }) => {
    const newPoints = [...points, { x, y, rect, green }];
    setPoints(newPoints);
  };

  const displayCross = (x, y) => {
    setCrossCords({ x, y });
    setCrossVisible(true);
  };

  const handleClick = (e) => {
    if (isSelectVisible) {
      setIsSelectVisible(false);
      return;
    }
    const rect = imgWrapRef.current.getBoundingClientRect();

    const gameRect = gameWrapRef.current.getBoundingClientRect();

    console.log(gameRect);

    const crossX = e.clientX - rect.left;
    const crossY = e.clientY - rect.top;

    setSelectLocation({
      x: crossX + POINT_SIZE,
      y: crossY,
    });
    setIsSelectVisible(true);

    const x = e.clientX - rect.left - 21; //x position within the element.
    const y = e.clientY - rect.top - 21; //y position within the element.

    // check for overlap
    for (let point of points) {
      const overlap = !(
        point.y > y + POINT_SIZE ||
        point.x + POINT_SIZE < x ||
        point.y + POINT_SIZE < y ||
        point.x > x + POINT_SIZE
      );
      if (overlap) {
        const cross = crossRef.current.children[0];

        // display and fadeout cross
        setTimeout(() => {
          cross.classList.add("fadeout");
        }, 500);
        displayCross(crossX, crossY);
        return;
      }
    }

    if (checkIfFound({ x: crossX, y: crossY, coords: owl })) {
      addPoint({ x, y, green: true });
    } else {
      addPoint({ x, y, green: false });
    }

    // addPoint({ x, y, });
  };

  return (
    <StyledGamePlay>
      <StyledImgWrapper ref={gameWrapRef}>
        {isSelectVisible && (
          <SelectMenu
            level={level}
            x={selectLocation.x}
            y={selectLocation.y}
          />
        )}
        <PointWrap ref={imgWrapRef} onClick={handleClick}>
          <CrossIcon
            visible={crossVisible}
            x={crossCords.x}
            y={crossCords.y}
            updateref={updateCrossRef}
          />
          {points.map((point, index) => {
            return (
              <Point
                key={index}
                x={point.x}
                y={point.y}
                green={point.green}
              />
            );
          })}
          <StyledLevelImg src={`/levels/${level.image}`} alt="" />
        </PointWrap>
      </StyledImgWrapper>
    </StyledGamePlay>
  );
};

export default GamePlay;
