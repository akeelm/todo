import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import todoReducer from '../redux/todoSlice';
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
}

export const store = configureStore({
  reducer: {
    todo: persistReducer(persistConfig, todoReducer),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
