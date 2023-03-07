import React, { useRef, useState } from "react";
import {
  StyledPrompt,
  LoadingIcon,
  SuccessIcon,
  ErrorIcon,
  InfoMsg,
} from "./Prompt.styled";
import { Button } from "../styles/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import { formatTime, sanitize, wait } from "../../utils";
import { addDoc, collection, doc } from "firebase/firestore";
import { hidePrompt } from "../../features/gameplay/gameplaySlice";

const Prompt = ({ level }) => {
  const [buttonText, setButtonText] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const db = useSelector((state) => state.main.db);

  const inputRef = useRef();
  const buttonRef = useRef();
  const time = useSelector((state) => state.gameplay.time);
  const dispatch = useDispatch();
  const handleClick = async () => {
    if (isLoading) return;
    if (!inputRef.current.checkValidity()) {
      inputRef.current.reportValidity();
      return;
    }
    setButtonText(<LoadingIcon />);
    setIsLoading(true);

    // DATABASE CALL TO STORE INFO and show appropirate icon

    //GET LEVEL ID
    const data = {
      name: sanitize(inputValue),
      time: time,
    };
    try {
      await addDoc(
        collection(
          doc(db, "highscores", "iXo6ZpqjxwzbBqJLXGMd"),
          level.id
        ),
        data
      );

      await wait(1000);
      setIsLoading(false);
      setButtonText(<SuccessIcon />);
      setInputValue("");
      // 1450 time depends on css animation duration for success or error icon
      await wait(1450);
      await wait(100);
      setButtonText("Submit");
      dispatch(hidePrompt());
    } catch (error) {
      console.log("ERROR SENDING HIGHSCORE TO DATABASE");
      console.log(error);
      setTimeout(() => {
        setIsLoading(false);
        setButtonText(<ErrorIcon />);
        setTimeout(() => {
          setButtonText("Submit");
        }, 1450);
      }, 1000);
    }

    // BEFORE CALL SANITIZE INPUT with sanitize util function
    // IF string is longer than 30 slice it 0 to 30 and then sanitize
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
