import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languagesReducer from '../features/languages/languagesSlice';

export const store = configureStore({
  reducer: {
    languages: languagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
