import styled from "styled-components";

export const TopBarFullWidth = styled.div`
  background-color: ${({ theme }) => theme.colors.topbar};
  width: 100vw;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.5);
  display: flex;
  justify-content: center;
  padding: 1.3rem;
`;

export const StyledTopbar = styled.div`
  width: min(1000px, 100%);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: ". btn github";

  @media (max-width: ${({ theme }) => theme.mobile.L}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "btn github";
  }
`;
