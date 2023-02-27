import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import {
  resetFoundCharacters,
  resetPoints,
  startTimer,
} from "../features/gameplay/gameplaySlice";

const RouteCheck = () => {
  console.log("render routecheck");
  const location = useLocation();
  const dispatch = useDispatch();
  const stopCountdownRef = useRef();
  const { stopCountdown } = useSelector((state) => state.gameplay);
  useEffect(() => {
    const regex = /\/game\/.*/;
    if (stopCountdownRef.current) {
      stopCountdownRef.current();
    }

    if (regex.test(location.pathname)) {
      // The URL has changed, handle it as needed
      console.log("reset timer now");

      dispatch(startTimer());

      //reset timer
      dispatch(resetFoundCharacters());
      //clear points on the picture
      dispatch(resetPoints());
    }
  }, [location, dispatch, stopCountdownRef]);

  useEffect(() => {
    stopCountdownRef.current = stopCountdown;
  }, [stopCountdown]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default React.memo(RouteCheck);
