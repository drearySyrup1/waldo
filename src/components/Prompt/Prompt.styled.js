import styled, { css, keyframes } from "styled-components";
import { ImSpinner8 } from "react-icons/im";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdError } from "react-icons/md";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const StyledPrompt = styled.div`
  --height: 270px;
  position: fixed;
  height: var(--height);
  top: calc(50% - var(--height) / 2);
  z-index: 10;
  border-radius: 10px;
  padding: 1rem 3rem;
  color: white;
  font-weight: bold;
  background-color: hsl(0 0% 17%);
  display: grid;
  justify-items: center;
  grid-auto-rows: min-content;
  gap: 0.8rem;
  align-content: center;

  & > *:not(button) {
    margin: 0;
    padding: 0;
  }

  & p {
    font-size: 0.9rem;
  }

  & input {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 0;
  }
`;

export const InfoMsg = styled.p`
  font-weight: 100;
  font-size: 0.8rem !important;
`;

const ResponseStyles = css`
  font-size: 1rem;
  animation: ${fadeIn} 700ms linear 2 alternate forwards;
`;

export const LoadingIcon = styled(ImSpinner8)`
  font-size: 1rem;
  animation: ${spin} 500ms linear infinite;
`;

export const SuccessIcon = styled(BsCheckCircleFill)`
  ${ResponseStyles}
`;

export const ErrorIcon = styled(MdError)`
  ${ResponseStyles}
  color: #b02222;
`;
