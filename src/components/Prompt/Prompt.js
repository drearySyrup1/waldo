import styled, { css, keyframes } from "styled-components";
import React, { useRef, useState } from "react";
import {
  StyledPrompt,
  LoadingIcon,
  SuccessIcon,
  ErrorIcon,
  InfoMsg,
} from "./Prompt.styled";
import { Button } from "../styles/Button.styled";
import { useSelector } from "react-redux";
import { formatTime, santizie } from "../../utils";
const Prompt = ({ level }) => {
  const [buttonText, setButtonText] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const buttonRef = useRef();
  const time = useSelector((state) => state.gameplay.time);
  const handleClick = () => {
    if (isLoading) return;
    if (!inputRef.current.checkValidity()) {
      inputRef.current.reportValidity();
      return;
    }
    setButtonText(<LoadingIcon />);
    setIsLoading(true);

    // DATABASE CALL TO STORE INFO and show appropirate icon

    // BEFORE CALL SANITIZE INPUT with sanitize util function
    // IF string is longer than 30 slice it 0 to 30 and then sanitize

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
      <InfoMsg>
        Congrats you completed: <b>{level.name}</b>
      </InfoMsg>
      <InfoMsg>
        Your time was: <b>{formatTime(time)}</b>
      </InfoMsg>
      <p>Enter your name:</p>
      <input
        ref={inputRef}
        minLength={2}
        maxLength={30}
        required
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        type="text"
      />

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
