import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: "",
  },
  reducers: {
    
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { decrement, incrementByAmount } = searchSlice.actions;

export default searchSlice.reducer;