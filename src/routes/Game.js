import React from "react";
import TopBarGame from "../components/TopBarGame";
import GamePlay from "../components/GamePlay";
import { useParams } from "react-router-dom";
import levels from "../levels";

const Game = () => {
  const { id } = useParams();

  const level = levels.find((item) => item.id === id);

  return (
    <>
      <TopBarGame level={level} />
      <GamePlay level={level} />
    </>
  );
};

export default Game;
