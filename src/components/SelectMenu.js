import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PlayerCircle from "./PlayerCircle";

const Menu = styled.div`
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
  z-index: 30;
  color: white;
  width: 300px;
  background-color: black;
  border-radius: 10px;
  overflow: hidden;
`;

const Option = styled.div`
  padding: 0.5rem 1rem;
  background-color: hsl(0 0% 16%);
  cursor: pointer;
  border-bottom: 1px solid hsl(0 0% 22%);
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 20px;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  &:hover {
    background-color: hsl(0 0% 19%);
  }
`;

const SelectMenu = ({ x, y, level, handleMenuSelect }) => {
  const { foundCharacters } = useSelector(
    (state) => state.gameplay
  );
  return (
    <Menu x={x} y={y}>
      {level.characters.map((item) => {
        if (!foundCharacters.includes(item.id))
          return (
            <Option
              onClick={() => handleMenuSelect(item.id, item.cords)}
            >
              <PlayerCircle>
                <img
                  src={`/characters/${level.name}/${item.img}`}
                  alt=""
                />
              </PlayerCircle>
              {item.name}
            </Option>
          );
      })}
    </Menu>
  );
};

export default SelectMenu;
