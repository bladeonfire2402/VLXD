import { configureStore, createSlice } from '@reduxjs/toolkit';

import modalReducer from './slices/modalSlice';

// Tạo một temp slice/reducer tạm thời
const tempSlice = createSlice({
  name: 'temp',
  initialState: {
    ready: true,
  },
  reducers: {},
});

export const store = configureStore({
  reducer: {
    temp: tempSlice.reducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
