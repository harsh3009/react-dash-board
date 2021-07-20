import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    items: []
  },
  reducers: {
    setItems: (state, action) => {
      console.log('inside');
      state.items = action.payload.items;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setItems } = counterSlice.actions;

export default counterSlice.reducer;
