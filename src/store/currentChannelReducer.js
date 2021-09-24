import { createSlice } from '@reduxjs/toolkit';

export const currentChannelSlice = createSlice({
  name: 'currentChannel',
  initialState: {
    currentChannelId: '',
  },
  reducers: {
    setCurrentChannelId: (state, action) => {
      state.currentChannelId = action.payload;
    },
  },
});

export const { setCurrentChannelId } = currentChannelSlice.actions;

export default currentChannelSlice.reducer;
