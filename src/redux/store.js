import { configureStore, combineReducers } from '@reduxjs/toolkit';
import useReducer from './user/userSlice';
import themeReducer from './theme/themeSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
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