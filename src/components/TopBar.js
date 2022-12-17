import React from "react";
import {
  TopBarFullWidth,
  StyledTopbar,
} from "./styles/TopBar.styled";
import { Button } from "./styles/Button.styled";
import GithubIcon from "./GithubIcon";

const TopBar = () => {
  return (
    <TopBarFullWidth>
      <StyledTopbar>
        <Button
          bg={{
            H: 266,
            S: 50,
            L: 65,
          }}
          color="#fff"
        >
          Leader Board
        </Button>
        <GithubIcon />
      </StyledTopbar>
    </TopBarFullWidth>
  );
};

export default TopBar;
