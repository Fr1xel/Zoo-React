import { createSelector, createSlice } from '@reduxjs/toolkit'

export const initialState = {
  user: {
    animalsInfo: [],
    isLoaded: false,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAnimals: (state, action) => {
        state.user.animalsInfo = action.payload
    },
    loadingEnded: (state, action) => {
        state.user.isLoaded = action.payload
    }
  },
})


export const { addAnimals, loadingEnded } = userSlice.actions

export default userSlice.reducer