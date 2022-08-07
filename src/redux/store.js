import { applyMiddleware, compose, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import appReducer from "./appReducer";

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
