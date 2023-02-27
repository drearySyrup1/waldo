import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC12xcyOyS-kYjJ1w0Sa7p1opJhNUwo5oA",
  authDomain: "waldo-56c76.firebaseapp.com",
  projectId: "waldo-56c76",
  storageBucket: "waldo-56c76.appspot.com",
  messagingSenderId: "671981256138",
  appId: "1:671981256138:web:81864c110bc310f50ca333",
  measurementId: "G-9K835CQX5F",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initialState = {
  db: db,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
});

export default mainSlice.reducer;
