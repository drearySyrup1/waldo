import styled from "styled-components";
import React, { useRef, useState } from "react";
import {
  StyledPrompt,
  LoadingIcon,
  SuccessIcon,
  ErrorIcon,
} from "./Prompt.styled";
import { Button } from "../styles/Button.styled";
const Prompt = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const buttonRef = useRef();
  const handleClick = () => {
    if (isLoading) return;
    setButtonText(<LoadingIcon />);
    setIsLoading(true);

    // if sucess shows icon
    // setTimeout(() => {
    //   setIsLoading(false);
    //   setButtonText(<SuccessIcon />);
    //   setTimeout(() => {
    //     setButtonText("Submit");
    //   }, 1450);
    // }, 1000);

    // if error
    setTimeout(() => {
      setIsLoading(false);
      setButtonText(<ErrorIcon />);
      setTimeout(() => {
        setButtonText("Submit");
      }, 1450);
    }, 1000);
  };
  return (
    <StyledPrompt>
      <h3>Submit your score</h3>
      <p>Enter your name</p>
      <input type="text" />

      <Button
        bg={{
          H: 266,
          S: 50,
          L: 65,
        }}
        color="#fff"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </StyledPrompt>
  );
};

export default Prompt;
