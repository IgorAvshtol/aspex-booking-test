import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from '@store/reducers/userReducer';
import { authReducer } from '@store/reducers/authReducer';
import { store } from '@store/persistStore.ts';
import { modalReducer } from '@store/reducers/modalReducer.ts';

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  modal: modalReducer,
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
