import styled from "styled-components";
import { hslString as hsl } from "../../utils";

export const Button = styled.button`
  border: 0;
  background-color: ${({ bg: { H, S, L } }) => hsl(H, S, L)};
  color: ${({ color }) => color};
  border-radius: 5px;
  padding: 1.8em 2rem;
  text-transform: uppercase;
  box-shadow: 0 0 7px rgb(0 0 0 / 0.4);
  font-weight: bold;
  font-size: 0.7rem;
  grid-area: btn;
  justify-self: center;
  width: max-content;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    box-shadow: 0 0 14px ${({ bg: { H, S, L } }) => hsl(H, 70, 30)};
  }

  &:active {
    scale: 0.98;
  }
`;
