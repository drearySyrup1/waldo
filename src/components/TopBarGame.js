import React, { useEffect, useRef, useState } from "react";
import {
  TopBarFullWidth,
  StyledTopBarGame,
  CircleWrap,
  Timer,
} from "./styles/TopBar.styled";
import { Button } from "./styles/Button.styled";
import { GameIcon } from "./GithubIcon";
import PlayerCircle from "./PlayerCircle";

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time % 60;

  const zeroPrefix = (time) => (time < 10 ? "0" : "");

  const hourString =
    hours > 0 ? `${zeroPrefix(hours)}${hours}:` : "";
  return `${hourString}${zeroPrefix(
    minutes
  )}${minutes}:${zeroPrefix(seconds)}${seconds}`;
}

const TopBar = ({ level }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((p) => p + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TopBarFullWidth>
      <StyledTopBarGame>
        <CircleWrap>
          {level.characters.map((item) => {
            return (
              <PlayerCircle>
                <img
                  src={`/characters/${level.name}/${item.img}`}
                  alt=""
                />
              </PlayerCircle>
            );
          })}
        </CircleWrap>
        <Timer>{formatTime(timer)}</Timer>
        <Button
          bg={{
            H: 266,
            S: 50,
            L: 65,
          }}
          color="#fff"
        >
          reset
        </Button>
        <GameIcon />
      </StyledTopBarGame>
    </TopBarFullWidth>
  );
};

export default TopBar;
