import styled from "styled-components";

export const StyledLevelSelectCard = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 10px;
  display: grid;
  place-content: center;
  place-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 25px rgb(0 0 0 / 0.6),
    inset 0 0 10px 2px rgb(0 0 0 / 0.6);

  ::after {
    content: "";
    background-color: #000;
    position: absolute;
    width: 110%;
    height: 110%;
    opacity: 0;
    transition: all 200ms;
  }

  &:hover::after {
    opacity: 0.5;
  }

  &:hover .name {
    opacity: 1;
  }

  img {
    width: 500px;
    z-index: -1;
  }

  .name {
    position: absolute;
    color: #fff;
    z-index: 10;
    opacity: 0;
    transition: all 200ms;
    font-size: 1.5rem;
  }

  @media (width < 768px) {
    width: 300px;
    height: 530px;
  }
`;
