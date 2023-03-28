import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from '../Reducer/Reducer'
import logger from "redux-logger";

const middleware = applyMiddleware(logger);
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export let Store = createStore(persistedReducer, middleware)
export let Persistor = persistStore(Store)