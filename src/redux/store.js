import { configureStore, combineReducers } from '@reduxjs/toolkit';
import useReducer from './user/userSlice';
import { persistReducer } from 'redux-persist';


const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({ serializableCheck: false }),
  });

  export const persistor = persistStore(store);