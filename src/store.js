import { configureStore } from "@reduxjs/toolkit";
import gameplayReducer from "./features/gameplay/gameplaySlice";
import mainReducer from "./features/mainSlice";
const store = configureStore({
  reducer: {
    gameplay: gameplayReducer,
    main: mainReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
