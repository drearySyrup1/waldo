import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedCharacter: null,
};

const gameplaySlice = createSlice({
  name: "gameplay",
  initialState,
  reducers: {
    changeCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
    resetCharacter: (state) => {
      state.selectedCharacter = null;
    },
  },
});

export default gameplaySlice.reducer;
export const { changeCharacter, resetCharacter } =
  gameplaySlice.actions;
