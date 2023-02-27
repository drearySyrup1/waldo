import React, { useState } from "react";
import {
  TopBarFullWidth,
  StyledTopbar,
} from "./styles/TopBar.styled";
import { Button } from "./styles/Button.styled";
import GithubIcon from "./GithubIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonUrl, setButtonUrl] = useState("");
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    const regex = /\/leader\/?.*/;
    if (regex.test(location.pathname)) {
      setButtonText("Home");
      setButtonUrl("/");
    } else {
      setButtonText("Leader Board");
      setButtonUrl("/leader/59930ddb-1f87-4730-9eb8-e34ca1c63f3d");
    }
  }, [location]);
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
          onClick={() => navigate(buttonUrl)}
        >
          {buttonText}
        </Button>
        <GithubIcon />
      </StyledTopbar>
    </TopBarFullWidth>
  );
};

export default TopBar;
