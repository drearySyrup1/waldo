import { configureStore } from "@reduxjs/toolkit";
import gameplayReducer from "./features/gameplay/gameplaySlice";
const store = configureStore({
  reducer: {
    gameplay: gameplayReducer,
  },
});

export default store;
