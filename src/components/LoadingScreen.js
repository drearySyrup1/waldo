import React, { useEffect, useRef, useState } from "react";
import {
  Wrapper,
  LoadingBox,
  Dot,
} from "./styles/LoadingScreen.styled";

const LoadingScreen = () => {
  const dotsRef = useRef([]);
  console.log("render");

  useEffect(() => {
    const lastElement = dotsRef.current[dotsRef.current.length - 1];

    lastElement.addEventListener("animationend", () => {
      dotsRef.current.forEach((el) => {
        el.classList.remove("birka");
        setTimeout(() => {
          el.classList.add("birka");
        }, 10);
      });
    });
  }, []);
  return (
    <Wrapper>
      <LoadingBox>
        Loading, please wait...
        <div>
          {(() => {
            const dots = [];
            for (let i = 0; i < 3; i++) {
              dots.push(
                <Dot
                  ref={(node) => dotsRef.current.push(node)}
                  className="birka"
                  data-stats={i}
                  index={i}
                />
              );
            }
            return dots;
          })()}
        </div>
      </LoadingBox>
    </Wrapper>
  );
};

export default React.memo(LoadingScreen);
