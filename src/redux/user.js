import { createSelector, createSlice } from '@reduxjs/toolkit'

export const initialState = {
  user: {
    animalsInfo: []
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAnimals: (state, action) => {
        state.user.animalsInfo = action.payload
    }
  },
})


export const { addFirstName, addLastName } = userSlice.actions

export default userSlice.reducer