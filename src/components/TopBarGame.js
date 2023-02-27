import React, { useEffect, useRef, useState } from "react";
import {
  TopBarFullWidth,
  StyledTopBarGame,
  CircleWrap,
  Timer,
  ButtonWrap,
} from "./styles/TopBar.styled";

import {
  setStopCountdown,
  resetFoundCharacters,
  resetPoints,
} from "../features/gameplay/gameplaySlice";
import { Button } from "./styles/Button.styled";
import { GameIcon } from "./GithubIcon";
import PlayerCircle from "./PlayerCircle";
import { useDispatch, useSelector } from "react-redux";
import { startTimer } from "../features/gameplay/gameplaySlice";
import { useNavigate } from "react-router-dom";
import { formatTime } from "../utils";

const TopBar = ({ level }) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);
  const { foundCharacters, stopCountdown } = useSelector(
    (state) => state.gameplay
  );

  const navigate = useNavigate();

  const handleResetClick = () => {
    stopCountdown();
    //reset timer
    dispatch(startTimer());
    //reset foundcharacters
    dispatch(resetFoundCharacters());
    //clear points on the picture
    dispatch(resetPoints());
  };

  const { time } = useSelector((state) => state.gameplay);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((p) => p + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <TopBarFullWidth>
      <StyledTopBarGame>
        <CircleWrap>
          {level.characters.map((item, index) => {
            const isChecked = foundCharacters.includes(item.id);
            return (
              <PlayerCircle checked={isChecked}>
                <img
                  src={`/characters/${level.name}/${item.img}`}
                  alt=""
                />
              </PlayerCircle>
            );
          })}
        </CircleWrap>
        <Timer>{formatTime(time)}</Timer>
        <ButtonWrap>
          <Button
            bg={{
              H: 266,
              S: 50,
              L: 65,
            }}
            color="#fff"
            onClick={handleResetClick}
          >
            reset
          </Button>
          <Button
            bg={{
              H: 266,
              S: 50,
              L: 65,
            }}
            color="#fff"
            onClick={() => navigate("/")}
          >
            home
          </Button>
        </ButtonWrap>
        <GameIcon />
      </StyledTopBarGame>
    </TopBarFullWidth>
  );
};

export default TopBar;
