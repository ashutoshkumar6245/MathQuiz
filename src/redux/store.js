import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSilce';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store