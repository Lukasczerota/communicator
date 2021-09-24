import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userDataReducer';
import currentChannelReducer from './currentChannelReducer';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    currentChannel: currentChannelReducer,
  },
});
