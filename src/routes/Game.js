import React, { useEffect } from "react";
import TopBarGame from "../components/TopBarGame";
import GamePlay from "../components/GamePlay";
import { useParams } from "react-router-dom";
import levels from "../levels";
import { startTimer } from "../features/gameplay/gameplaySlice";
import { useDispatch } from "react-redux";

const Game = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const level = levels.find((item) => item.id === id);

  // useEffect(() => {
  //   dispatch(startTimer());
  // }, [level, dispatch]);

  return (
    <>
      <TopBarGame level={level} />
      <GamePlay level={level} />
    </>
  );
};

export default Game;
