import { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";

const StyledCross = styled(RxCross2)`
  font-size: 2rem;
  color: red;
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
  translate: -50% -50%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 300ms;

  .fadeout {
    opacity: 0;
  }
`;

const CrossIcon = ({ updateref, ...props }) => {
  const elementRef = useRef();

  useEffect(() => {
    updateref(elementRef.current);
  }, []);

  return (
    <span ref={elementRef}>
      <StyledCross {...props} />
    </span>
  );
};

export default CrossIcon;
