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
import { useDispatch, useSelector } from "react-redux";
import {
  addFoundCharacter,
  addNewPoint,
  showPrompt,
  startTimer,
} from "../features/gameplay/gameplaySlice";
import Prompt from "./Prompt/Prompt";
import LoadingScreen from "./LoadingScreen";
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
  const [isLoading, setIsLoading] = useState(true);
  const { promptVisible } = useSelector((state) => state.gameplay);
  const [crossVisible, setCrossVisible] = useState(false);
  const [crossCords, setCrossCords] = useState({ x: 0, y: 0 });
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [selectLocation, setSelectLocation] = useState({
    x: 0,
    y: 0,
  });
  const [whiteCircleLocation, setWhiteCircleLocation] = useState({
    x: 0,
    y: 0,
    rect: {},
  });
  const dispatch = useDispatch();
  const foundCharacters = useSelector(
    (state) => state.gameplay.foundCharacters
  );

  const { stopCountdown, points } = useSelector(
    (state) => state.gameplay
  );
  const [isWhiteCircleVisible, setIsWhiteCircleVisible] =
    useState(false);
  const crossRef = useRef();
  const updateCrossRef = (newRef) => (crossRef.current = newRef);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--point-size",
      `${POINT_SIZE}px`
    );
  }, []);

  const handleLoad = (e) => {
    setIsLoading(false);
    stopCountdown();
    dispatch(startTimer());
  };

  // to stop timer when all characeters are found
  useEffect(() => {
    if (foundCharacters.length === level.characters.length) {
      stopCountdown();
      dispatch(showPrompt());
    }
  }, [foundCharacters, level.characters, stopCountdown]);

  const addPoint = ({ x, y, rect, green }) => {
    dispatch(addNewPoint({ x, y, rect, green }));
  };

  const displayCross = (x, y) => {
    setCrossCords({ x, y });
    setCrossVisible(true);
    setTimeout(() => {
      setCrossVisible(false);
    }, 700);
  };

  const handleMenuSelect = (id, cords) => {
    if (
      checkIfFound({
        x: whiteCircleLocation.corner.x,
        y: whiteCircleLocation.corner.y,
        coords: cords,
      }) &&
      !foundCharacters.includes(id)
    ) {
      addPoint({
        x: whiteCircleLocation.x,
        y: whiteCircleLocation.y,
        green: true,
      });
      setIsWhiteCircleVisible(false);
      setIsSelectVisible(false);
      dispatch(addFoundCharacter(id));
    } else {
      // dispaly cross
      setIsWhiteCircleVisible(false);
      setIsSelectVisible(false);
      displayCross(
        whiteCircleLocation.corner.x,
        whiteCircleLocation.corner.y
      );
    }
  };

  const handleClick = (e) => {
    if (foundCharacters.length === level.characters.length) {
      return;
    }

    if (isSelectVisible) {
      setIsSelectVisible(false);
      setIsWhiteCircleVisible(false);
      return;
    }
    const rect = imgWrapRef.current.getBoundingClientRect();

    const gameRect = gameWrapRef.current.getBoundingClientRect();

    const crossX = e.clientX - rect.left;
    const crossY = e.clientY - rect.top;
    // used to find coords for new characters when adding new levels

    console.log(`
      X: ${crossX}
      Y: ${crossY}
    `);

    // if mouse is to close to right side then put the
    // select menu on the left instead of right of the mouse
    if (e.clientX + 340 >= gameRect.right) {
      setSelectLocation({
        x: crossX - 300 - POINT_SIZE,
        y: crossY,
      });
    } else {
      setSelectLocation({
        x: crossX + POINT_SIZE,
        y: crossY,
      });
    }
    setIsSelectVisible(true);

    // 21 is offset for the circle to appear around the mouse in the center
    const x = e.clientX - rect.left - 21; //x position within the element.
    const y = e.clientY - rect.top - 21; //y position within the element.

    setIsWhiteCircleVisible(true);
    setWhiteCircleLocation({
      x: x,
      y: y,
      corner: {
        x: crossX,
        y: crossY,
      },
    });

    // // check for overlap
    // for (let point of points) {
    //   const overlap = !(
    //     point.y > y + POINT_SIZE ||
    //     point.x + POINT_SIZE < x ||
    //     point.y + POINT_SIZE < y ||
    //     point.x > x + POINT_SIZE
    //   );
    //   if (overlap) {
    //     const cross = crossRef.current.children[0];

    //     // display and fadeout cross
    //     setTimeout(() => {
    //       cross.classList.add("fadeout");
    //     }, 500);
    //     displayCross(crossX, crossY);
    //     return;
    //   }
    // }

    // if (checkIfFound({ x: crossX, y: crossY, coords: owl })) {
    //   addPoint({ x, y, green: true });
    // }

    // addPoint({ x, y, });
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <StyledGamePlay>
        {promptVisible && <Prompt level={level} />}
        <StyledImgWrapper ref={gameWrapRef}>
          {isSelectVisible && (
            <SelectMenu
              level={level}
              x={selectLocation.x}
              y={selectLocation.y}
              handleMenuSelect={handleMenuSelect}
            />
          )}
          <PointWrap ref={imgWrapRef} onClick={handleClick}>
            <CrossIcon
              visible={crossVisible.toString()}
              x={crossCords.x}
              y={crossCords.y}
              updateref={updateCrossRef}
            />
            {isWhiteCircleVisible && (
              <Point
                x={whiteCircleLocation.x}
                y={whiteCircleLocation.y}
              />
            )}
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
            <StyledLevelImg
              onLoad={handleLoad}
              src={`/levels/${level.image}`}
              alt=""
            />
          </PointWrap>
        </StyledImgWrapper>
      </StyledGamePlay>
    </>
  );
};

export default GamePlay;
