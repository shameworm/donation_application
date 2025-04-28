import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import User from './reducers/User';

const rootReducer = combineReducers({user: User});

const logger = __DEV__ ? createLogger() : undefined;

const config = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(config, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['register'],
      },
    });
    return logger ? middleware.concat(logger) : middleware;
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
