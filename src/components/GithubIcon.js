import React from "react";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";

const GithubIcon = styled(FiGithub)`
  font-size: 2rem;
  justify-self: center;
  color: #fff;
  transition: all 500ms;

  @media (max-width: ${({ theme }) => theme.mobile.L}) {
    font-size: 1.5rem;
  }
`;

const StyledIcon = styled.a`
  justify-self: flex-end;
  display: grid;
  grid-area: github;
  justify-self: end;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms;

  &:hover ${GithubIcon} {
    rotate: 360deg;
  }

  &:hover > * {
    text-shadow: 0 0 10px #fff;
  }

  &:active {
    scale: 0.95;
  }
`;

const StyledSpan = styled.span`
  font-weight: bold;
  color: #fff;
  transition: all 200ms;

  @media (max-width: ${({ theme }) => theme.mobile.L}) {
    font-size: 0.8rem;
  }
`;

const Icon = () => {
  return (
    <StyledIcon href="https://github.com">
      <GithubIcon />
      <StyledSpan>drearySyrup1</StyledSpan>
    </StyledIcon>
  );
};

export default Icon;
