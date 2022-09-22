import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  animals: {
    animalsInfo: [],
    isLoaded: false,
  },
};

export const fetchAnimals = createAsyncThunk("animals", () => {
  return axios
    .get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((response) => {
      return  response.data ;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addAnimals: (state, action) => {
      state.user.animalsInfo = action.payload;
    },
    loadingEnded: (state, action) => {
      state.user.isLoaded = action.payload;
    },
  },
  extraReducers: {
    [fetchAnimals.fulfilled]: (state, action) => {
      state.animals.animalsInfo = action.payload;
      state.animals.isLoaded = true;
    },
  },
});

export const { addAnimals, loadingEnded } = userSlice.actions;

export default userSlice.reducer;
